import { NextApiResponse, NextApiRequest, NextApiHandler } from "next";
const preview: NextApiHandler = async (req, res: NextApiResponse) => {
  res.setPreviewData({
    user: "admin",
  });
  //   res.end("preview page");
  res.redirect(req.query.url as string);
};
export default preview;
