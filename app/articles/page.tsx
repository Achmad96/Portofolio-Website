import { ArticleFormType } from "@/types";
import { getPublishedArticles } from "@/utils/NotionService";

import ArticleCard from "@/components/ArticleCard";
import PaginationComponent from "@/components/PaginationComponent";

const PAGE_SIZE = 4;

export const revalidate = 3600;

const isValidUUID = (uuid?: string): boolean => {
  return uuid
    ? uuid.match(
        /^[0-9a-f]{8}-[0-9a-f]{4}-[0-5][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i,
      )?.length === 1
    : false;
};

interface IPage {
  searchParams: {
    startCursor?: string;
  };
}

const Page = async ({ searchParams: { startCursor = undefined } }: IPage) => {
  const { articles, nextCursor, hasMore } = (await getPublishedArticles(
    PAGE_SIZE,
    isValidUUID(startCursor) ? startCursor : undefined,
  )) as ArticleFormType;
  return (
    <div className="flex h-auto min-h-[80vh] flex-col items-center justify-center gap-5 max-md:min-h-[78dvh]">
      <div className="flex flex-wrap">
        {articles.map((article) => (
          <ArticleCard key={article.id} {...article} />
        ))}
      </div>
      <PaginationComponent
        articles={articles}
        nextCursor={nextCursor}
        hasMore={hasMore}
        searchParams={startCursor}
      />
    </div>
  );
};

export default Page;
