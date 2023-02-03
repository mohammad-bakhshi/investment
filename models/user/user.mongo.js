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
  },
  role: {
    type: String,
    enum: ["user", "admin"],
    required: true,
    default: "user"
  }
})

const userModel = model('user', userSchema, 'users');
export default userModel;