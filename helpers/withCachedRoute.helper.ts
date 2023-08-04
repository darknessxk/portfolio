import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import cache from 'memory-cache';

const withCachedRouted = <T>(handler: (req: NextApiRequest, res: NextApiResponse) => Promise<T>): NextApiHandler => {
    return async (req: NextApiRequest, res: NextApiResponse) => {
        res.setHeader('Content-Type', 'application/json')
        const stored = cache.get(req.url);

        if (stored) {
            return res.status(200).json(stored);
        }

        const data = await handler(req, res);
        cache.put(req.url, data, 1000 * 60 * 60 * 8);
        return res.status(200).json(data);
    };
};

export default withCachedRouted;
