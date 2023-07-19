import type { NextApiRequest, NextApiResponse } from "next";
import { draftMode } from "next/headers";

export default function preview(req: NextApiRequest, res: NextApiResponse) {
  draftMode().enable();
  res.setPreviewData({});
  res.writeHead(307, { Location: "/" });
  res.end();
}
