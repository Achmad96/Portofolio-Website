import { format, parseISO } from "date-fns";
import { allPosts } from "contentlayer/generated";
import { notFound } from "next/navigation";

export const generateStaticParams = async () => allPosts.map(post => ({ slug: post._raw.flattenedPath }));
export const generateMetadata = ({ params }: { params: { slug: string } }) => {
    const post = allPosts.find(post => post._raw.flattenedPath === params.slug);
    if (!post) notFound();
    return { title: post.title };
};

const PostLayout = ({ params }: { params: { slug: string } }) => {
    const post = allPosts.find(post => post._raw.flattenedPath === params.slug);
    if (!post) notFound();

    return (
        <article className="mx-auto max-w-7xl min-h-[80vh] py-8">
            <div className="mb-8 text-center">
                <time dateTime={post.date} className="mb-1 text-xs text-gray-600">
                    {format(parseISO(post.date), "LLLL d, yyyy")}
                </time>
                <h1 className="text-3xl font-bold">{post.title}</h1>
            </div>
            <div className="[&>*]:mb-3 [&>*:last-child]:mb-0" dangerouslySetInnerHTML={{ __html: post.body.html }} />
        </article>
    );
};

export default PostLayout;
