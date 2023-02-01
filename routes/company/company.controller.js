import { createCompany, getAllCompanies } from "../../models/company/company.model.js";



export const httpGetAllCompanies = async (req, res) => {
  const companies = await getAllCompanies();
  return companies;
}



export const httpCreateCompany = async (req, res) => {
  const { symbol, value, profit } = req.body;
  const result = await createCompany(symbol, value, profit);
  return res.status(201).json(result)
}