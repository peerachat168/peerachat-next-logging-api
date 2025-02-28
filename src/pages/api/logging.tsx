import type { NextApiRequest, NextApiResponse } from 'next';

type ResponseData = {
  message: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  console.log('Content-Security-Policy');
  console.log({ 'url': req.url, 'query': req.query, 'body': req.body, 'headers': req.headers });
  res.status(200).json({ message: 'logging success' });
}