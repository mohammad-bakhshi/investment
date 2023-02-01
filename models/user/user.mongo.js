import { Schema, model } from "mongoose";

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  investment: {
    type: Number,
    default: 0
  }
})

const userModel = model('user', userSchema, 'users');
export default userModel;