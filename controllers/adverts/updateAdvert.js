const Adverts = require("../../models/adverts");

const { HttpError } = require("../../helpers");

const updateAdvert = async (req, res) => {
  // const { _id: owner } = req.user;

  const { advertId } = req.params;
  const result = await Adverts.findOneAndUpdate(
    {
      _id: advertId,
      // owner
    },
    req.body,
    {
      new: true,
    }
  );

  if (!result) {
    throw HttpError(404, "Not found");
  }

  res.json(result);
};

module.exports = updateAdvert;
