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
    throw new Error(error);
  }
}

export const userExists = async (username) => {
  try {
    const result = await User.findOne({ username }, { id: 1 });
    if (result) return true
    else return false
  } catch (error) {
    throw new Error(error);
  }
}

export const findByUsername = async (username) => {
  try {
    const result = await User.findOne({ username });
    return result;
  } catch (error) {
    throw new Error(error);
  }
}

export const checkPassword = async (password, userPassword) => {
  try {
    const matched = await bcrypt.compare(password, userPassword);
    return matched
  } catch (error) {
    throw new Error(error);
  }
}

export const updateUser = async (userID, username, password) => {
  try {
    const id = mongoose.Types.ObjectId(userID);
    let updateFields = {};
    if (username) {
      updateFields["username"] = username;
    }
    if (password) {
      updateFields["password"] = password;
    }
    const result = await User.findByIdAndUpdate(id, updateFields);
    return {
      username: result.username,
      password: result.password,
      investment: result.investment
    }
  } catch (error) {
    throw new Error(error);
  }
}

export const deleteUser = async (userID) => {
  try {
    const id = mongoose.Types.ObjectId(userID);
    const result = await User.findByIdAndDelete(id);
    return {
      username: result.username,
      password: result.password,
      investment: result.investment
    }
  } catch (error) {
    throw new Error(error);
  }
}


export const updateInvestment = async (userID, investment) => {
  try {
    const id = mongoose.Types.ObjectId(userID)
    const result = await User.findByIdAndUpdate(id, { investment });
    return {
      username: result.username,
      password: result.password,
      investment: result.investment
    }
  } catch (error) {
    throw new Error(error);
  }
}

export const adminExists = async () => {
  try {
    const result = await User.findOne({ role: "admin" });
    if (result) return true;
    return false;
  } catch (error) {
    throw new Error(error);
  }
}

export const createAdmin = async () => {
  try {
    const salt = await bcrypt.genSalt(10);
    const password = await bcrypt.hash(process.env.ADMIN_PASSWORD, salt);
    const admin = {
      username: process.env.ADMIN_USERNAME,
      password: password,
      role: "admin"
    }
    const result = await User.create(admin);
    return result;
  } catch (error) {
    throw new Error(error);
  }
}


export const isAdmin = async (userID) => {
  try {
    const id = mongoose.Types.ObjectId(userID)
    console.log(id);
    const user = await User.findById(id, { role: 1 });
    if (user.role === "admin") {
      return true;
    }
    return false;
  } catch (error) {
    throw new Error(error);
  }
}

export const getUserInvestment = async (userID) => {
  try {
    const id = mongoose.Types.ObjectId(userID)
    const user = await User.findById(id, { investment: 1 });
    return user;
  } catch (error) {
    throw new Error(error);
  }
}


export const getUserByID = async (userID) => {
  try {
    const id = mongoose.Types.ObjectId(userID)
    const user = await User.findById(id, { username: 1, investment: 1 });
    return user;
  } catch (error) {
    throw new Error(error);
  }
}