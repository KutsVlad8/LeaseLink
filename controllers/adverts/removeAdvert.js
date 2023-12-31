const Adverts = require("../../models/adverts");

const { HttpError } = require("../../helpers");

const removeAdvert = async (req, res) => {
  // const { _id: owner } = req.user;
  const { advertId } = req.params;
  const result = await Adverts.findOneAndRemove({ _id: advertId });

  if (!result) {
    throw HttpError(404, "Not found");
  }

  res.json({
    message: "Advert deleted",
  });
};

module.exports = removeAdvert;
