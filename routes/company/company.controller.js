import { createCompany, getAllCompanies } from "../../models/company/company.model.js";



export const httpGetAllCompanies = async (req, res) => {
  try {
    const companies = await getAllCompanies();
    return res.status(200).json(companies);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "internal server error" })
  }
}



export const httpCreateCompany = async (req, res) => {
  try {
    const { symbol, value, profit } = req.body;
    const result = await createCompany(symbol, value, profit);
    return res.status(201).json(result)
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "internal server error" })
  }
}