const Cars = require("../../models/cars");

const { HttpError } = require("../../helpers");

const getAdvertById = async (req, res) => {
  const { advertId } = req.params;
  const result = await Cars.findOne({ _id: advertId });

  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json(result);
};

module.exports = getAdvertById;
