import { format, parseISO } from "date-fns";
import { Post } from "contentlayer/generated";
import Link from "next/link";
import Image from "next/image";

export default function PostCard(post: Post) {
    const thumbnail = post.thumbnail || "";
    return (
        <div className="flex flex-col gap-5 w-80 items-center">
            <Link href={post.url}>
                <Image src={thumbnail} alt="thumbnail" width={700} height={500} className="blur-lg hover:blur-0 transition-all duration-200" />
            </Link>
            <div className="flex flex-col">
                <h2 className="mb-1 text-2xl">
                    <Link href={post.url} className="text-blue-700 hover:text-blue-900 dark:text-blue-400">
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
