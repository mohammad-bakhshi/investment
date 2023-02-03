import express from 'express';
const router = express.Router();
import { httpProfilePage } from './profile.controller.js';
import { loginChecker } from '../../middlewares/auth.middleware.js';


router.get('/', loginChecker, httpProfilePage)


export default router;