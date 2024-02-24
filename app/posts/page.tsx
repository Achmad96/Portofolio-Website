import { allPosts } from "contentlayer/generated";
import { Suspense } from "react";
import PostCard from "components/PostCard";

export default function PostForm() {
  const posts = allPosts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
  return (
    <div className="flex min-h-[72vh] justify-center gap-5">
      {posts.map((post, idx) => {
        return (
          <div className="flex h-fit rounded-xl bg-zinc-900 p-14 max-md:p-8">
            <Suspense
              fallback={
                <div className="flex w-52 flex-col gap-4">
                  <div className="d-skeleton h-32 w-full"></div>
                  <div className="d-skeleton h-4 w-28"></div>
                  <div className="d-skeleton h-4 w-full"></div>
                  <div className="d-skeleton h-4 w-full"></div>
                </div>
              }
            >
              <PostCard key={idx} {...post} />
            </Suspense>
          </div>
        );
      })}
    </div>
  );
}
