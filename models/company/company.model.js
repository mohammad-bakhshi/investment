import Company from './company.mongo.js';

export const createCompany = async (symbol, value, profit) => {
  try {
    const company = {
      symbol,
      value,
      profit
    }
    const result = await Company.create(company);
    return {
      symbol: result.symbol,
      value: result.value,
      profit: result.profit
    }
  } catch (error) {
    throw new Error(error);
  }
}


export const getAllCompanies = async () => {
  try {
    const companies = await Company.find({}, { id: 1, symbol: 1, profit: 1, value: 1 }).lean();
    return companies;
  } catch (error) {
    throw new Error(error);
  }
}