import { NextApiRequest, NextApiResponse } from 'next';

export const create = (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(String(req));
  }
};
