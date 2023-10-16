const Cars = require("../../models/cars");
const Joi = require("joi");

const { HttpError } = require("../../helpers");

const addSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  phone: Joi.string().required(),
  favorite: Joi.boolean(),
});

const createAdvert = async (req, res) => {
  const { _id: owner } = req.user;

  const { error } = addSchema.validate(req.body);
  if (error) {
    throw HttpError(404, "missing required name field");
  }

  const result = await Cars.create({ ...req.body, owner });
  res.status(201).json(result);
};

module.exports = createAdvert;
