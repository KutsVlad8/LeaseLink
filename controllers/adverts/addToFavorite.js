const Cars = require("../../models/cars");
const Joi = require("joi");

const { HttpError } = require("../../helpers");

const favoriteSchema = Joi.object({
  favorite: Joi.boolean().required(),
});

const addFavorite = async (req, res) => {
  const { _id: owner } = req.user;

  const { error } = favoriteSchema.validate(req.body);
  if (error) {
    throw HttpError(400, "missing field favorite");
  }
  const { contactId } = req.params;
  const result = await Cars.findOneAndUpdate(
    { _id: contactId, owner },
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

module.exports = addFavorite;
