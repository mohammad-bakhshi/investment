import { getAllCompanies } from '../../models/company/company.model.js';

export const httpHomePage = async (req, res) => {
  try {
    const companies = await getAllCompanies();
    let login = false;
    if (req.session.userID) {
      login = true;
    }
    return res.render('index', { title: "صفحه نخست:صندوق سرمایه گزاری آرمان اقتصاد", login, companies, text: "ثبت نام / ورود" })
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "internal server error" })
  }
}