import React from "react";
import { comments } from "../../data/comments";
function CommentId({ comment }) {
  return (
    <div>
      {comment.id} | {comment.text}
    </div>
  );
}

export default CommentId;
export async function getStaticPaths() {
  return {
    paths: [{ params: { commentId: "1" } }, { params: { commentId: "2" } }],
    fallBack: `blocking`,
  };
}
export async function getStaticProps(context) {
  const { commentId } = context.params;

  /** dont do that if i have a api within the app or next it self
   *  const data = await fetch(`api/comment/${commentId}`);
   *  const comment = await data.json();
   */
  // * instead use the database or the source of data that you have
  const comment = comments.find(({ id }) => id === commentId);
  return {
    props: {
      comment,
    },
  };
}
