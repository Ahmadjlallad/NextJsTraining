import React from "react";

export default function comments() {
  const [newComment, setNewComment] = React.useState("");

  const [comments, setComments] = React.useState([]);
  const fetchComments = async () => {
    const data = await fetch("api/comments");
    const comments = await data.json();
    setComments(comments);
  };
  const submitComment = async () => {
    const res = await fetch("api/comments", {
      method: "POST",
      body: JSON.stringify({ newComment }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const newComments = await res.json();
    setComments(newComments);
  };
  async function deleteComment(id) {
    console.log(id);
    const deletedCommentData = await fetch(`api/comments/${id}`, {
      method: "DELETE",
    });
    const newComments = await deletedCommentData.json();
    setComments(newComments);
  }
  return (
    <div>
      <input
        type="text"
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
      />
      <button onClick={submitComment}>submit comment</button>
      <button onClick={fetchComments}>show comments</button>
      {comments.map((comment) => (
        <div key={comment.id}>
          <h3>{comment.id}</h3>
          <h3>{comment.text}</h3>
          <button onClick={() => deleteComment(comment.id)}>delete</button>
        </div>
      ))}
    </div>
  );
}
