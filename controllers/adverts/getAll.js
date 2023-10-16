const Adverts = require("../../models/adverts");

const getAll = async (req, res) => {
  // const { _id } = req.cars;

  // const { page = 1, limit = 10 } = req.query;
  // const skip = (page - 1) * limit;

  // const result = await Cars.find({ _id }, "-createdAt -updateAT", {
  //   skip,
  //   limit,
  // });

  const result = await Adverts.find();
  res.json(result);
};

module.exports = getAll;
