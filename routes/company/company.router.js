import express from 'express';
const router = express.Router();
import { isAdminChecker } from '../../middlewares/auth.middleware.js'
import { httpCreateCompany, httpGetAllCompanies } from "./company.controller.js";
import { createCompanyValidation } from "./company.middleware.js";


router.get('/', httpGetAllCompanies)
router.post('/', isAdminChecker, createCompanyValidation, httpCreateCompany)


export default router;