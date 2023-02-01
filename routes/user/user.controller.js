import { createUser, userExists, findByUsername, checkPassword, updateInvestment } from "../../models/user/user.model.js";



export const httpSignUpUser = async (req, res) => {
  const { username, password } = req.body;
  const exists = await userExists(username);
  if (exists) return res.status(400).json({ err: true, msg: "user already exists" })
  const result = await createUser(username, password);
  req.session.userID = result.id;
  return res.status(201).json(result)
}

export const httpSignInUser = async (req, res) => {
  const { username, password } = req.body;
  const exists = await userExists(username);
  if (!exists) return res.status(404).json({ err: true, msg: "User not found" })
  const user = await findByUsername(username);
  const matched = await checkPassword(password, user.password);
  if (matched) {
    req.session.userID = user.id;
    return res.status(200).json({ err: false, msg: "You are logged in" })
  }
  else {
    return res.status(401).json({ err: true, msg: "Password was incorrect" })
  }
}

export const httpLogoutUser = async (req, res) => {
  req.session = null;
  return res.status(200).json({ err: false, msg: "You are logged out" })
}


export const httpInvestmentUser = async (req, res) => {
  const { investment } = req.body;
  if (!investment) return res.status(400).json({ err: true, msg: "investment amount is required" })
  if (typeof investment !== "number" || investment <= 0) return res.status(400).json({ err: true, msg: "investment amount is not correct" })
  const result = await updateInvestment(req.session.userID, investment);
  return res.status(200).json(result);
}