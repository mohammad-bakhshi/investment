import User from './user.mongo.js';
import bcrypt from 'bcryptjs';
import mongoose from 'mongoose';

export const createUser = async (username, password) => {
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = {
      username,
      password: hashedPassword
    }
    const result = await User.create(user);
    return {
      id: result.id,
      username: result.username,
      password: result.password,
      investment: result.investment
    }
  } catch (error) {
    console.log(error)
  }
}

export const userExists = async (username) => {
  try {
    const result = await User.findOne({ username }, { id: 1 });
    if (result) return true
    else return false
  } catch (error) {
    console.log(error)
  }
}

export const findByUsername = async (username) => {
  try {
    const result = await User.findOne({ username });
    return result;
  } catch (error) {
    console.log(error)
  }
}

export const checkPassword = async (password, userPassword) => {
  try {
    const matched = await bcrypt.compare(password, userPassword);
    return matched
  } catch (error) {
    console.log(error);
  }
}


export const updateInvestment = async (userID, investment) => {
  try {
    const id = mongoose.Types.ObjectId(userID)
    const result = await User.findByIdAndUpdate(id, { investment });
    return {
      username: result.username,
      investment: result.investment
    }
  } catch (error) {
    console.log(error);
  }
}