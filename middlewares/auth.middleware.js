import { isAdmin } from '../models/user/user.model.js';

//session checker
export const sessionChecker = (req, res, next) => {
  if (req.session.userID) {
    return res.status(200).json({ msg: "you logged in before" })
  }
  next()
}

//login checker
export const loginChecker = (req, res, next) => {
  if (!req.session.userID) {
    return res.status(200).json({ msg: "you are not logged in" })
  }
  next()
}

//admin checker
export const isAdminChecker = async (req, res, next) => {
  if (!req.session.userID) {
    return res.status(403).json({ err: true, msg: "You are not logged in" })
  }
  const isadmin = await isAdmin(req.session.userID);
  if (!isadmin) {
    return res.status(403).json({ err: true, msg: "You are not admin" })
  }
  next()
}