import { Link, useLoaderData } from "@remix-run/react";

//  This function needs to be named loader.
export const loader = async () => {
  const posts = [
    {
      slug: "my-first-title",
      title: "my-first-post",
    },
    {
      slug: "trail-riding-with-one-wheel",
      title: "Trail Riding with one wheel",
    },
  ];
  const postsString = JSON.stringify({ posts });
  return new Response(postsString, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

const Posts = () => {
  const { posts } = useLoaderData();
  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map((post: { slug: string; title: string }) => (
          <li key={post.slug}>
            <Link to={post.slug}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Posts;
