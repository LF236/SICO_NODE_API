import { Response } from 'express';

export const getUser = ( req: any, res: Response ) => {
    res.status( 200 ).json({
        ok: true,
        msg: 'Is ok'
    });
};