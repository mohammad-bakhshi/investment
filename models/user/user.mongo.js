import { Schema } from "mongoose";

const userSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String
  }
})