import express from 'express';
const router = express.Router();
import { httpAuthPage } from './auth.controller.js';


router.get('/', httpAuthPage)


export default router;