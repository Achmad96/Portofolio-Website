import { format, parseISO } from "date-fns";
import { Post } from "contentlayer/generated";
import Link from "next/link";
import Image from "next/image";

export default function PostCard(post: Post) {
  const thumbnail = post.thumbnail || "";
  return (
    <div className="flex w-80 flex-col items-center gap-5 max-md:w-72">
      <Link href={post.url}>
        <Image
          src={thumbnail}
          alt="thumbnail"
          width={700}
          height={500}
          priority
        />
      </Link>
      <div className="flex flex-col">
        <h2 className="mb-1 text-2xl">
          <Link
            href={post.url}
            className="font-bold text-blue-400 hover:text-blue-500 dark:text-blue-400"
          >
            {post.title}
          </Link>
        </h2>
        <time dateTime={post.date} className="mb-2 block text-xs text-gray-600">
          {format(parseISO(post.date), "LLLL d, yyyy")}
        </time>
        <p>{post.subtitle}</p>
      </div>
    </div>
  );
}
