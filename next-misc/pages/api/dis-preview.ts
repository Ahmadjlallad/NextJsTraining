import { NextApiHandler } from "next";
const handler: NextApiHandler = async (req, res) => {
  res.clearPreviewData();
  res.end("preview mode disabled");
};

export default handler;
