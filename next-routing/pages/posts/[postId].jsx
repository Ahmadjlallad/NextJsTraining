import React from "react";
import { useRouter } from "next/router";
function postId({ post }) {
  const router = useRouter();
  if (router.isFallback) {
    return <div>loading...</div>;
  }
  return (
    <div>
      id: {post.id}
      <hr />
      title: {post.title}
      <hr />
      body: {post.body}
      <hr />
    </div>
  );
}

export default postId;

export async function getStaticProps(context) {
  const { postId } = context.params;
  const resp = await fetch(
    "https://jsonplaceholder.typicode.com/posts/" + postId
  );

  const data = await resp.json();
  return {
    props: {
      post: data,
    },
  };
}
export async function getStaticPaths() {
  const resp = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await resp.json();
  // const paths = data
  //   .slice(0, 3)
  //   .map((post) => ({ params: { postId: `${post.id}` } }));
  return {
    // paths,
    paths: [
      { params: { postId: "1" } },
      { params: { postId: "2" } },
      { params: { postId: "3" } },
    ] /* [{ params: { postId: "1" } }] */,
    fallback: true, // mandatory
    /**
     * false paths will be rendered at build time 2. than any post id will be 404
     * true the id that have been not genrated by getStaticPaths
     * will
     * `blocking` similar to true but no 404 will be rendered
     */
  };
}
