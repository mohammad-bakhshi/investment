export const createCompanyValidation = (req, res, next) => {
  if (!req.body.symbol) return res.status(400).json({ err: true, msg: "symbol is required" })
  if (!req.body.value) return res.status(400).json({ err: true, msg: "value is required" })
  if (!req.body.profit) return res.status(400).json({ err: true, msg: "profit is required" })
  next()
}

