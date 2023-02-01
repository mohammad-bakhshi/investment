export const signupSignInUserValidation = (req, res, next) => {
  if (!req.body.username) return res.status(400).json({ err: true, msg: "username is required" })
  if (!req.body.password) return res.status(400).json({ err: true, msg: "password is required" })
  next()
}
