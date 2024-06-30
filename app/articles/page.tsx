import { ArticleFormType } from "@/types";
import { getPublishedArticles } from "@/utils/NotionService";

import ArticleCard from "@/components/ArticleCard";
import PaginationComponent from "@/components/PaginationComponent";

const PAGE_SIZE = 4;

export const revalidate = 600;

interface IPage {
  searchParams: {
    startCursor?: string;
  };
}

export default async function Page({
  searchParams: { startCursor = undefined },
}: IPage) {
  const { articles, nextCursor, hasMore } = (await getPublishedArticles(
    PAGE_SIZE,
    startCursor,
  )) as ArticleFormType;
  return (
    <div className="flex h-auto min-h-[80vh] flex-col items-center justify-center gap-5 max-md:min-h-[78dvh]">
      <div className="flex flex-wrap">
        {articles.map((article) => {
          return <ArticleCard key={article.id} {...article} />;
        })}
      </div>
      <PaginationComponent
        articles={articles}
        nextCursor={nextCursor}
        hasMore={hasMore}
        searchParams={startCursor}
      />
    </div>
  );
}
