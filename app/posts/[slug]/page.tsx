import { allPosts } from "contentlayer/generated";
import { notFound } from "next/navigation";
import { useMDXComponent } from "next-contentlayer/hooks";
import Image from "next/image";

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
    <div className="flex min-h-[80vh] w-full flex-col items-center">
      <div className="mb-6 flex w-full flex-col items-center">
        <div className="relative h-[50vh] w-[80%]  max-sm:w-[85%]">
          <Image
            src={post.thumbnail}
            alt="thumbnail"
            layout="fill"
            fill={true}
            objectFit="cover"
            className="rounded-3xl"
            priority={true}
          />
        </div>
        <div className="mt-5 flex w-[80%] flex-col gap-3 max-sm:w-[85%]">
          <h1 className="text-5xl font-bold">{post.title}</h1>
          <time dateTime={post.date} className="mb-1 text-lg">
            {new Intl.DateTimeFormat("id", options).format(new Date(post.date))}
          </time>
        </div>
      </div>
      <article className="prose max-w-[80%] text-justify prose-img:mx-auto prose-img:rounded-xl max-sm:max-w-[85%]">
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
