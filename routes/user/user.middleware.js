export const signupSignInUserValidation = (req, res, next) => {
  if (!req.body.username) return res.status(400).json({ err: true, msg: "username is required" })
  if (!req.body.password) return res.status(400).json({ err: true, msg: "password is required" })
  next()
}

export const updateInformationValidation = (req, res, next) => {
  if (!req.body.username && !req.body.password) return res.status(400).json({ err: true, msg: "username or password filed is required" })
  next()
}


