import { comments } from "../../../data/comments";
export default function handlerDeleted(req, res) {
  const commentId = Number.parseInt(req.query.commentId);
  console.log(req.query);
  if (req.method === "DELETE") {
    // const index = comments.find(({ id }, i) => {
    //   if (id === Number.parseInt(commentId)) {
    //     return i;
    //   }
    // });
    const index = comments.findIndex(({ id }) => id === commentId);
    comments.splice(index, 1);

    res.status(201).json(comments);
  }
  if (req.method === "PUT") {
    const index = comments.findIndex(({ id }) => id === commentId);
    comments[index] = req.body.updatedComment;
    res.status(201).json(comments);
  }
  if (req.method === "GET") {
    const filteredComment = comments.find(({ id }) => id === commentId);
    res.status(200).json({ comments: filteredComment });
  }
}
