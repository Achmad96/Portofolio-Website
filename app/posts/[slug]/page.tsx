import { allPosts } from "contentlayer/generated";
import { notFound } from "next/navigation";
import { useMDXComponent } from "next-contentlayer/hooks";

const PostLayout = ({ params }: { params: { slug: string } }) => {
    const post = allPosts.find(post => post._raw.flattenedPath === params.slug);
    if (!post) notFound();

    const MDXContent = useMDXComponent(post.body.code);

    return (
        <div className="mx-auto min-h-[72vh] max-w-[80%]">
            <div className="mb-6">
                <div
                    style={{
                        backgroundImage: `url(${post.thumbnail})`,
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        width: "100%",
                        height: "50vh",
                        flex: "auto",
                        alignItems: "end",
                        justifyContent: "end",
                    }}
                ></div>
                <div className="flex mt-5 flex-col gap-1">
                    <h1 className="text-5xl font-extralight text-cyan-50">{post.title}</h1>
                    <time dateTime={post.date} className="mb-1 text-lg text-gray-400">
                        {new Intl.DateTimeFormat("en-US").format(new Date(post.date))}
                    </time>
                </div>
            </div>
            <article className="prose max-w-fit prose-invert lg:prose-xl prose-img:mx-auto text-justify">
                <MDXContent />
            </article>
        </div>
    );
};

export default PostLayout;

export const generateStaticParams = async () => allPosts.map(post => ({ slug: post._raw.flattenedPath }));

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
    const post = allPosts.find(post => post._raw.flattenedPath === params.slug);
    if (!post) notFound();
    return { title: post.title };
};
