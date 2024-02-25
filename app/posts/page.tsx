import { allPosts } from "contentlayer/generated";
import PostCard from "components/PostCard";

export default function PostForm() {
  const posts = allPosts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
  return (
    <div className="flex min-h-[80vh] justify-center gap-5">
      {posts.map((post, idx) => {
        return <PostCard key={idx} {...post} />;
      })}
    </div>
  );
}
