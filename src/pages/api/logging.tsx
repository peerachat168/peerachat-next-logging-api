import type { NextApiRequest, NextApiResponse } from "next";

type ResponseData = {
  message: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const data = req;
  console.log("Content-Security-Policy logging");
  console.log(data.body);
  res.status(200).json({ message: "logging success" });
}