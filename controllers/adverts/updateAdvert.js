const Cars = require("../../models/cars");
const Joi = require("joi");

const { HttpError } = require("../../helpers");

const updateSchema = Joi.object({
  name: Joi.string(),
  email: Joi.string(),
  phone: Joi.string(),
  favorite: Joi.boolean(),
});

const updateAdvert = async (req, res) => {
  const { _id: owner } = req.user;

  const { error } = updateSchema.validate(req.body);
  if (error) {
    throw HttpError(404, "missing required name field");
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

module.exports = updateAdvert;
