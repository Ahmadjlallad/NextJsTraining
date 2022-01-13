import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
function index({ posts }) {
  const router = useRouter();
  return (
    <div>
      {posts.map((post) => (
        <div key={post.id} onClick={() => router.push("/posts/" + post.id)}>
          <div>{post.title}</div>
          <div>{post.id}</div>
          <Link href={`/posts/${post.id}`} passHref>
            <a>Go to {post.id}</a>
          </Link>
        </div>
      ))}
    </div>
  );
}
// getStaticPaths because we need to get the postIds
// and its ssg is a static page and post id dynamic
// we need to tell the id
export default index;

export async function getStaticProps() {
  const resp = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await resp.json();
  return {
    props: {
      posts: data,
    },
  };
}
