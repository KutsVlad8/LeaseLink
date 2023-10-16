const Cars = require("../models/cars");

const { HttpError } = require("../helpers");

const removeAdvert = async (req, res) => {
  const { _id: owner } = req.user;
  const { contactId } = req.params;
  const result = await Cars.findOneAndRemove({ _id: contactId, owner });

  if (!result) {
    throw HttpError(404, "Not found");
  }

  res.json({
    message: "contact deleted",
  });
};

module.exports = removeAdvert;
