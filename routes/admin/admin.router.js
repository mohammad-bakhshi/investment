import express from 'express';
const router = express.Router();
import { isAdminChecker, loginChecker } from '../../middlewares/auth.middleware.js';
import { httpAdminPage } from './admin.controller.js';


router.get('/', loginChecker, isAdminChecker, httpAdminPage)


export default router;