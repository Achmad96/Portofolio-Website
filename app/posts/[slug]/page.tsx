import { allPosts } from "contentlayer/generated";
import { notFound } from "next/navigation";
import { useMDXComponent } from "next-contentlayer/hooks";
import Image from "next/image";

const PostLayout = ({ params }: { params: { slug: string } }) => {
    const post = allPosts.find(post => post._raw.flattenedPath === params.slug);
    if (!post) notFound();

    const MDXContent = useMDXComponent(post.body.code);

    return (
        <article className="prose prose-headings:text-cyan-50 lg:prose-xl mx-auto min-h-[72vh] text-cyan-50 max-w-[80%] ">
            <div className="mb-8 flex flex-col items-center">
                <Image src={post.thumbnail} width={600} height={450} alt={"thumbnail"} />
                <h1 className="text-3xl font-bold text-cyan-50">{post.title}</h1>
                <time dateTime={post.date} className="mb-1 text-xs text-gray-600">
                    {new Intl.DateTimeFormat("en-US").format(new Date(post.date))}
                </time>
            </div>
            <div className="text-justify">
                <MDXContent />
            </div>
        </article>
    );
};

export default PostLayout;

export const generateStaticParams = async () => allPosts.map(post => ({ slug: post._raw.flattenedPath }));

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
    const post = allPosts.find(post => post._raw.flattenedPath === params.slug);
    if (!post) notFound();
    return { title: post.title };
};
