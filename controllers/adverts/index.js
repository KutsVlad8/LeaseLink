const { ctrlWrapper } = require("../../helpers");

const getAll = require("./getAll");
const getAdvertById = require("./getAdvertById");
const createAdvert = require("./createAdvert");
const updateAdvert = require("./updateAdvert");
const addToFavorite = require("./addToFavorite");
const removeAdvert = require("./removeAdvert");

module.exports = {
  getAll: ctrlWrapper(getAll),
  getAdvertById: ctrlWrapper(getAdvertById),
  createAdvert: ctrlWrapper(createAdvert),
  updateAdvert: ctrlWrapper(updateAdvert),
  addToFavorite: ctrlWrapper(addToFavorite),
  removeAdvert: ctrlWrapper(removeAdvert),
};
