const { ctrlWrapper } = require("../../helpers");

const register = require("./register");
const logIn = require("./logIn");
const getCurrentUser = require("./getCurrentUser");
const logOut = require("./logOut");

module.exports = {
  register: ctrlWrapper(register),
  logIn: ctrlWrapper(logIn),
  getCurrentUser: ctrlWrapper(getCurrentUser),
  logOut: ctrlWrapper(logOut),
};
