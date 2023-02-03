import express from 'express';
const router = express.Router();
import { httpGreedy, httpDynamic } from './optimal.controller.js';
import { loginChecker } from '../../middlewares/auth.middleware.js';

router.get('/greedy', loginChecker, httpGreedy)
router.get('/dynamic', loginChecker, httpDynamic)
// router.get('/backtracking')


export default router;