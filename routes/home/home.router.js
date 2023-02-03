import express from 'express';
const router = express.Router();
import { httpHomePage } from './home.controller.js';


router.get('/', httpHomePage)


export default router;