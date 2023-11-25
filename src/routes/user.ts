/*
    Prefix: /user
*/
import { Router } from 'express';
import { createUser, getUser } from '../controllers/user';

const router : Router = Router();

router.get( '/', getUser );
router.post( '/', createUser );

export default router;