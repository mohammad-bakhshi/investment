import Company from './company.mongo.js';

export const createCompany = async (symbol, value, profit) => {
  try {
    const company = {
      symbol,
      value,
      profit
    }
    const result = await Company.create(company);
    return result;
  } catch (error) {
    console.log(error)
  }
}


export const getAllCompanies = async () => {
  try {
    const companies = await Company.find({});
    return companies;
  } catch (error) {

  }
}