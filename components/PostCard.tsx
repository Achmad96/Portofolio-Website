import { format, parseISO } from "date-fns";
import { Post } from "contentlayer/generated";

import Image from "next/image";
import Link from "next/link";

export default function PostCard(post: Post) {
  const thumbnail = post.thumbnail || "";
  return (
    <Link href={post.url} className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <Image
          src={thumbnail}
          alt="thumbnail"
          width={700}
          height={500}
          loading="lazy"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {post.title}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>{post.subtitle}</p>
        <div className="card-actions justify-end">
          <time
            dateTime={post.date}
            className="mb-2 block text-xs text-gray-600"
          >
            {format(parseISO(post.date), "LLLL d, yyyy")}
          </time>
        </div>
      </div>
    </Link>
  );
}
