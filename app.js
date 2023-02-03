import { config } from "dotenv";
config();
import express from 'express';
import cookieSession from 'cookie-session';
const app = express();
import companyRouter from './routes/company/company.router.js';
import userRouter from './routes/user/user.router.js';
import optimalRouter from './routes/optimal/optimal.router.js';
import homeRouter from './routes/home/home.router.js';
import authRouter from './routes/auth/auth.router.js';
import adminRouter from './routes/admin/admin.router.js';
import profileRouter from './routes/profile/profile.router.js';

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cookieSession({
  name: 'user_sid',
  keys: [process.env.SECRET_KEY],
  maxAge: 24 * 60 * 60 * 1000, // 24 hours
  httpOnly: true
}))
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use('/', homeRouter);
app.use('/auth', authRouter);
app.use('/user', userRouter);
app.use('/company', companyRouter);
app.use('/optimal', optimalRouter);
app.use('/admin', adminRouter);
app.use('/profile', profileRouter);

export default app;