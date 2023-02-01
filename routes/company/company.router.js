import express from 'express';
const router = express.Router();
import { httpCreateCompany, httpGetAllCompanies } from "./company.controller.js";


router.get('/', httpGetAllCompanies)
router.post('/', httpCreateCompany)


export default router;