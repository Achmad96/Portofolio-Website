import { format, parseISO } from "date-fns";
import { Post } from "contentlayer/generated";
import idLocale from "date-fns/locale/id";

import Image from "next/image";
import Link from "next/link";

export default function PostCard(post: Post) {
  const thumbnail = post.thumbnail || "";
  const isLessOrEqualThanAWeek =
    Math.floor(
      (new Date().getTime() - new Date(post.date).getTime()) /
        (1000 * 60 * 60 * 24),
    ) <= 7;

  return (
    <Link
      href={post.url}
      className="card-compact card w-96 bg-base-100 shadow-xl"
    >
      <figure>
        <Image
          src={thumbnail}
          alt="thumbnail"
          width={700}
          height={500}
          priority={true}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {post.title}
          <div
            className={`badge ${isLessOrEqualThanAWeek ? "badge-secondary" : "badge-accent"}`}
          >
            {isLessOrEqualThanAWeek ? "new" : "old"}
          </div>
        </h2>
        <p className="text-justify">{post.subtitle}</p>
        <div className="card-actions justify-end">
          <time
            dateTime={post.date}
            className="badge badge-ghost badge-outline mb-2 block text-xs"
          >
            {format(parseISO(post.date), "PP", { locale: idLocale })}
          </time>
        </div>
      </div>
    </Link>
  );
}
