import { getAllCompanies } from '../../models/company/company.model.js';
import { getUserInvestment } from '../../models/user/user.model.js';

export const httpGreedy = async (req, res) => {
  try {
    const companies = await getAllCompanies();
    const user = await getUserInvestment(req.session.userID);
    let updatedCompanies = companies.map(item => {
      return {
        symbol: item.symbol,
        value: item.value,
        profit: item.profit,
        division: (item.profit / item.value)
      }
    });
    updatedCompanies.sort(function (a, b) {
      return b.division - a.division;
    });
    let result = [];
    let investment = user.investment;
    let profit = 0
    for (let index = 0; index < updatedCompanies.length; index++) {
      if (updatedCompanies[index].value <= investment) {
        result.push(updatedCompanies[index])
        investment -= updatedCompanies[index].value;
        profit += updatedCompanies[index].profit;
      }
      else {
        break;
      }
    }
    const returnForm = { companies: result, profit }
    return res.status(200).json(returnForm)
  }
  catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "internal server error" })
  }
}


export const httpDynamic = async (req, res) => {
  try {
    const companies = await getAllCompanies();
    let min = companies[0].value;
    for (let index = 1; index < companies.length; index++) {
      if (companies[index].value < min) {
        min = companies[index].value;
      }
    }
    const user = await getUserInvestment(req.session.userID);
    let answerTable = new Array(companies.length + 1);
    let result = new Set();
    for (let i = 0; i < companies.length + 1; i++) {
      answerTable[i] = []
      for (let w = 0; w < user.investment + 1; w++) {
        if (i === 0 || w === 0) {
          answerTable[i][w] = 0;
        }
        else {
          if (companies[i - 1].value <= w) {
            const addNewCompany = companies[i - 1].profit + answerTable[i - 1][w - (companies[i - 1].value)];
            const previousProfit = answerTable[i - 1][w];
            if (addNewCompany >= previousProfit) {
              answerTable[i][w] = addNewCompany;
            }
            else {
              answerTable[i][w] = previousProfit;
            }
          }
          else {
            answerTable[i][w] = answerTable[i - 1][w];
          }
        }
        if (i >= 1) {
          if (w === user.investment && answerTable[i][w] >= answerTable[i - 1][w]) {
            result.add(companies[i - 1])
          }
        }
      }
    }
    const returnForm = { companies: Array.from(result), profit: answerTable[companies.length][user.investment] }
    return res.status(200).json(returnForm)
  }
  catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "internal server error" })
  }
}