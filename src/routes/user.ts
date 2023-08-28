/*
    Prefix: /user
*/
import { Router } from 'express';
import { getUser } from '../controllers/user';

const router : Router = Router();

router.get( '/', getUser );

export default router;