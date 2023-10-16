const Cars = require("../models/cars");

const { HttpError } = require("../helpers");

const getCarById = async (req, res) => {
  const { carId } = req.params;
  const result = await Cars.findOne({ _id: carId });

  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json(result);
};

module.exports = getCarById;
