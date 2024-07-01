import { notFound } from "next/navigation";
import { ArticleType } from "@/types";

import { getHeadings, getSingleArticlePage } from "@/utils/NotionService";
import { ImageContainer, ImageWithBlur } from "@/components/ImageComponent";
import { BlurImageDataType, getBlurData } from "@/app/actions";

import slugify from "slugify";
import ArticleContent from "@/components/ArticleContent";
import ArticleSide from "@/components/ArticleSide";

export const revalidate = 3600;

const Page = async ({ params }: { params: { slug: string } }) => {
  const { article, markdown } = await getSingleArticlePage(params.slug);
  if (!article) return notFound();
  const blurImageData = (await getBlurData(article.cover)) as BlurImageDataType;
  const headings = await getHeadings(article.id);
  const headingMap = headings.reduce((acc: any, heading: any) => {
    acc[heading.text] = slugify(heading.text, {
      lower: true,
      strict: true,
    });
    return acc;
  }, {});
  return (
    <main className="relative flex h-auto min-h-[80dvh] w-full items-center justify-center py-5">
      <div className="flex min-h-full w-[50%] flex-col gap-10 max-md:w-[85%]">
        <header className="flex w-full flex-col items-center gap-5">
          <ImageContainer className="relative h-[50vh] w-full">
            <ImageWithBlur
              blurImageData={blurImageData}
              alt="thumbnail"
              fill={true}
              className="rounded-3xl object-fill"
              sizes="(max-width: 640px) 60vw, (max-width: 768px) 80vw, (max-width: 1024) 100vw"
            />
          </ImageContainer>
          <div className="flex w-full flex-col gap-3">
            <h1 className="text-5xl font-bold">{article.title}</h1>
            <time className="text-sm">{article.createdAt}</time>
          </div>
        </header>
        <div className="flex h-auto w-full">
          <article className="prose max-w-full prose-headings:cursor-default prose-p:text-justify prose-p:indent-3">
            {markdown.parent ? (
              <ArticleContent
                content={markdown.parent}
                headingMap={headingMap}
              />
            ) : (
              <p>Article is Empty</p>
            )}
          </article>
        </div>
      </div>
      <ArticleSide title={article.title} headings={headings} />
    </main>
  );
};

export const generateMetadata = async ({
  params,
}: {
  params: { slug: string };
}) => {
  const { article }: { article: ArticleType } = (await getSingleArticlePage(
    params.slug,
  )) as { article: ArticleType };
  if (!article) notFound();
  return { title: article.title };
};

export default Page;
