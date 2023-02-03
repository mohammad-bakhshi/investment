import { getAllCompanies } from '../../models/company/company.model.js';


export const httpAdminPage = async (req, res) => {
  try {
    const companies = await getAllCompanies();
    return res.status(200).render('admin', { title: "پنل ادمین", companies })
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "internal server error" })
  }
}