import { Response } from 'express';

export const getUser = ( req: any, res: Response ) => {
    res.status( 200 ).json({
        ok: true,
        msg: 'Is ok'
    });
};

export const createUser = ( req: any, res: Response ) => {
    try {
        res.status( 200 ).json({
            ok: true,
            msg: 'User created'
        });
    }
    catch( err ) {
        console.log( err );
        res.status( 500 ).json({
            ok:false,
            msg: 'Error in the server'
        });
    }
}