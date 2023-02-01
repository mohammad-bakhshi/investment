import express from 'express';
const router = express.Router();
import { signupSignInUserValidation } from './user.middleware.js';
import { httpSignUpUser, httpSignInUser, httpLogoutUser, httpInvestmentUser } from "./user.controller.js";


router.post('/signup', signupSignInUserValidation, httpSignUpUser)
router.post('/signin', signupSignInUserValidation, httpSignInUser)
router.put('/investment', httpInvestmentUser)
router.get('/logout', httpLogoutUser)
// router.get('/dynamic')
// router.get('/greedy')
// router.get('/backtracking')


export default router;