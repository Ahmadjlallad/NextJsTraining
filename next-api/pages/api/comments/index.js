import { comments } from "../../../data/comments";

export default function handler(req, res) {
  console.log(req.query);
  if (req.method === "GET") res.status(200).json(comments);
  if (req.method === "POST") {
    const { newComment } = req.body;
    console.log(req.body);
    comments.push({
      id: Date.now(),
      text: newComment,
    });
    res.status(201).json(comments);
  }
}
