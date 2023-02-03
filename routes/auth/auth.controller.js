

export const httpAuthPage = (req, res) => {
  return res.status(200).render('auth', { title: "ثبت نام / ورود" })
}