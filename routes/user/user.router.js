import express from 'express';
const router = express.Router();
import { sessionChecker, loginChecker } from '../../middlewares/auth.middleware.js';
import { signupSignInUserValidation, updateInformationValidation } from './user.middleware.js';
import { httpSignUpUser, httpSignInUser, httpLogoutUser, httpUpdateUser, httpDeleteUser, httpInvestmentUser } from "./user.controller.js";


router.post('/signup', sessionChecker, signupSignInUserValidation, httpSignUpUser)//done
router.post('/signin', sessionChecker, signupSignInUserValidation, httpSignInUser)//done
router.get('/logout', loginChecker, httpLogoutUser)//done
router.put('/', loginChecker, updateInformationValidation, httpUpdateUser)//done
router.delete('/', loginChecker, httpDeleteUser)//done
router.put('/investment', loginChecker, httpInvestmentUser)//done


export default router;