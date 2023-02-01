import { Schema, model } from "mongoose";

const companySchema = new Schema({
  symbol: {
    type: String,
    required: true
  },
  value: {
    type: Number,
    required: true
  },
  profit: {
    type: Number,
    required: true
  }
})

const comapnyModel = model('company', companySchema, 'companies');
export default comapnyModel;