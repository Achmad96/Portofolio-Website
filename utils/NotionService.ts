import { Client } from "@notionhq/client";
import { cache } from "react";
import { NotionToMarkdown } from "notion-to-md";
import type {
  AuthorType,
  ArticleType,
  ArticleFormType,
  TagType,
  HeadingMapStruct,
  HeadingType,
} from "@/types";
import { formatDate } from "@/utils/Format";

const API_KEY = process.env.NEXT_NOTION_API_KEY;
const DATABASE_ID = process.env.NEXT_NOTION_DATABASE_ID;

const client = new Client({ auth: API_KEY });
const notionToMarkdown = new NotionToMarkdown({ notionClient: client });

const getCover = (page: any): string => {
  return !page.cover
    ? ""
    : page.cover.type === "file"
      ? (page.cover.file.url as string)
      : (page.cover.external.url as string);
};

const getHeadingsMap = (
  block: any,
): {
  heading_1: HeadingMapStruct;
  heading_2: HeadingMapStruct;
  heading_3: HeadingMapStruct;
} => {
  return {
    heading_1: {
      id: block.id,
      text: block.heading_1?.rich_text[0].plain_text,
      type: "heading_1",
    },
    heading_2: {
      id: block.id,
      text: block.heading_2?.rich_text[0].plain_text,
      type: "heading_2",
    },
    heading_3: {
      id: block.id,
      text: block.heading_3?.rich_text[0].plain_text,
      type: "heading_3",
    },
  };
};

const getHeadings = async (pageId: string): Promise<any> => {
  const response = await client.blocks.children.list({
    block_id: pageId,
  });
  const headings = response.results
    .filter(
      (block: any) =>
        block.type === "heading_1" ||
        block.type === "heading_2" ||
        block.type === "heading_3",
    )
    .map((block: any) => getHeadingsMap(block)[block.type as HeadingType]);
  return headings;
};

const transformPageToArticleForm = async (page: any): Promise<ArticleType> => {
  const { properties } = page;
  const { Title, Tags, Author, Published, Slug, CreatedAt } = properties;
  return {
    id: page.id as string,
    cover: getCover(page),
    title: Title.title[0].plain_text as string,
    tags: Tags.multi_select as TagType[],
    author: await getAuthorById(Author.created_by.id),
    published: Published.checkbox as boolean,
    slug: Slug.formula.string as string,
    createdAt: formatDate(CreatedAt.created_time) as string,
  };
};

const getAuthorById = async (user_id: string): Promise<AuthorType> => {
  const response = await client.users.retrieve({ user_id });
  return {
    id: response.id,
    name: response.name as string,
    avatar: response.avatar_url as string,
  };
};

const getPublishedArticles = cache(
  async (
    pageSize: number,
    startCursor: string | undefined = undefined,
  ): Promise<ArticleFormType> => {
    const response = await client.databases.query({
      database_id: DATABASE_ID as string,
      start_cursor: startCursor,
      page_size: pageSize,
      filter: {
        property: "Published",
        checkbox: {
          equals: true,
        },
      },
      sorts: [
        {
          property: "CreatedAt",
          direction: "ascending",
        },
      ],
    });
    const articles = await Promise.all(
      response.results.map(transformPageToArticleForm),
    );
    const { has_more, next_cursor } = response;
    return {
      articles,
      hasMore: has_more,
      nextCursor: next_cursor,
    };
  },
);

const getSingleArticlePage = cache(async (slug: string) => {
  const response = await client.databases.query({
    database_id: DATABASE_ID as string,
    filter: {
      and: [
        {
          property: "Slug",
          rich_text: {
            equals: slug,
          },
        },
        {
          property: "Published",
          checkbox: {
            equals: true,
          },
        },
      ],
    },
  });
  if (!response.results[0]) return { error: "Sorry, there was an error" };
  const page = response.results[0];
  const markdownBlocks = await notionToMarkdown.pageToMarkdown(page.id);
  const markdown = notionToMarkdown.toMarkdownString(markdownBlocks);
  const article = await transformPageToArticleForm(page);
  return {
    article,
    markdown,
  };
});

export { getPublishedArticles, getHeadings, getSingleArticlePage };
