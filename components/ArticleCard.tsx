import { ArticleType } from "@/types";

import Link from "next/link";
import { BlurImageDataType, getBlurData } from "@/app/actions";
import { ImageWithBlur } from "./ImageComponent";

export default async function ArticleCard(article: ArticleType) {
  const blurImageData = (await getBlurData(article.cover)) as BlurImageDataType;
  // const isLessOrEqualThanAWeek =
  //   Math.floor(
  //     (new Date().getTime() - new Date(article.createdAt).getTime()) /
  //       (1000 * 60 * 60 * 24),
  //   ) <= 7;
  console.log(article.slug);

  return (
    <Link
      href={`articles/${article.slug}`}
      className="h-96 w-96 rounded-xl bg-base-100 shadow-xl max-sm:w-80"
    >
      <figure className="relative h-1/2 w-full">
        <ImageWithBlur
          blurImageData={blurImageData}
          alt="thumbnail"
          fill={true}
          sizes="(max-width:768px) 70vw, (max-width: 1024px) 100vw"
          className="rounded-t-xl"
        />
      </figure>
      <div className="card-body h-1/2 justify-between">
        <h2 className="card-title text-3xl">{article.title}</h2>
        <div className="card-actions justify-end">
          <div className="text-xs">{article.createdAt}</div>
        </div>
      </div>
    </Link>
  );
}
