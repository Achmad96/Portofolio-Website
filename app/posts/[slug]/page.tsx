import { allPosts } from "contentlayer/generated";
import { notFound } from "next/navigation";
import { useMDXComponent } from "next-contentlayer/hooks";

const options: Intl.DateTimeFormatOptions = {
  weekday: "long",
  day: "numeric",
  month: "long",
  year: "numeric",
};

const PostLayout = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);
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
        <div className="mt-5 flex flex-col gap-3">
          <h1 className="text-5xl font-extralight">{post.title}</h1>
          <time dateTime={post.date} className="mb-1 text-lg">
            {new Intl.DateTimeFormat("id", options).format(new Date(post.date))}
          </time>
        </div>
      </div>
      <article className="prose max-w-fit text-justify prose-img:mx-auto">
        <MDXContent />
      </article>
    </div>
  );
};

export default PostLayout;
export const generateStaticParams = async () =>
  allPosts.map((post) => ({ slug: post._raw.flattenedPath }));

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);
  if (!post) notFound();
  return { title: post.title };
};
