import { config } from "dotenv";
config();
import express from 'express';
import cookieSession from 'cookie-session';
const app = express();
import companyRouter from './routes/company/company.router.js';
import userRouter from './routes/user/user.router.js';

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cookieSession({
  name: 'user_sid',
  keys: [process.env.SECRET_KEY],
  maxAge: 24 * 60 * 60 * 1000, // 24 hours
  httpOnly: true
}))
app.use('/user', userRouter);
app.use('/company', companyRouter);


export default app;