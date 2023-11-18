import { compareDesc, format, parseISO } from "date-fns";
import { allPosts, Post } from "contentlayer/generated";
import Link from "next/link";
import Image from "next/image";

function PostCard(post: Post) {
    const text = post.body.html;
    const thumbnail = post.thumbnail || "";
    return (
        <div className="flex flex-col gap-5 items-center">
            <Image src={thumbnail} alt="thumbnail" width={300} height={100} />
            <div className="flex flex-col">
                <h2 className="mb-1 text-xl">
                    <Link href={post.url} className="text-blue-700 hover:text-blue-900 dark:text-blue-400">
                        {post.title}
                    </Link>
                </h2>
                <time dateTime={post.date} className="mb-2 block text-xs text-gray-600">
                    {format(parseISO(post.date), "LLLL d, yyyy")}
                </time>
                <div className="text-sm [&>*]:mb-3 [&>*:last-child]:mb-0 max-w-xl" dangerouslySetInnerHTML={{ __html: text.length > 600 ? text.slice(0, 600) + "..." : text }} />
            </div>
        </div>
    );
}

export default function PostForm() {
    const posts = allPosts.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)));

    return (
        <div className="min-h-screen flex justify-center gap-5">
            {posts.map((post, idx) => {
                return (
                    <div className="flex max-h-[35rem] bg-zinc-900 p-14 rounded-xl">
                        <PostCard key={idx} {...post} />
                    </div>
                );
            })}
        </div>
    );
}
