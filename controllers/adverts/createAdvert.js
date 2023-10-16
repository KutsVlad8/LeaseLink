const { Adverts } = require("../../models/adverts");

const createAdvert = async (req, res) => {
  // const { _id: owner } = req.user;

  const result = await Adverts.create({
    ...req.body,
    accessories: [...req.body.accessories.split(", ")],
    functionalities: [...req.body.functionalities.split(", ")],
    // owner,
  });
  res.status(201).json(result);
};

module.exports = createAdvert;
