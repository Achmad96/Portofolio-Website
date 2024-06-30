import { MdStringObject } from "notion-to-md/build/types";

type AuthorType = {
  id: string;
  name: string;
  avatar: string;
};

type ArticleType = {
  id: string;
  title: string;
  cover: string;
  slug: string;
  author: AuthorType;
  tags: TagType[];
  published: boolean;
  createdAt: string;
};

type ArticleFormType = {
  articles: ArticleType[];
  hasMore: boolean;
  nextCursor: string | null;
};

type SingleArticlePageResponseType = {
  article: ArticleFormType;
  markdown: MdStringObject;
};

type TagType = {
  id: string;
  name: string;
};

type HeadingType = "heading_1" | "heading_2" | "heading_3";
type HeadingMapStruct = {
  id: string;
  text: string;
  type: HeadingType;
  sub?: HeadingMapStruct[];
};

export type {
  AuthorType,
  ArticleType,
  ArticleFormType,
  SingleArticlePageResponseType,
  TagType,
  HeadingType,
  HeadingMapStruct,
};
