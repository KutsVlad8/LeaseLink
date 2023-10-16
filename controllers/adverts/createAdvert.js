const Adverts = require("../../models/adverts");
const Joi = require("joi");

const { HttpError } = require("../../helpers");

const addSchema = Joi.object({
  year: Joi.number().required(),
  make: Joi.string().required(),
  model: Joi.string().required(),
  type: Joi.string().required(),
  img: Joi.string().required(),
  description: Joi.string().required(),
  fuelConsumption: Joi.string().required(),
  engineSize: Joi.string().required(),
  accessories: Joi.string().required(),
  functionalities: Joi.string().required(),
  rentalPrice: Joi.string().required(),
  rentalCompany: Joi.string().required(),
  address: Joi.string().required(),
  rentalConditions: Joi.string().required(),
  mileage: Joi.number().required(),
  favorite: Joi.boolean().default(false),
}).messages({
  "number.base": "{{#label}} must be a number.",
  "string.base": "{{#label}} must be a string.",
  "any.required": "{{#label}} is required.",
});

const createAdvert = async (req, res) => {
  const { _id: owner } = req.user;

  const { error } = addSchema.validate(req.body);
  if (error) {
    throw HttpError(404, "missing required name field");
  }

  const result = await Adverts.create({ ...req.body, owner });
  res.status(201).json(result);
};

module.exports = createAdvert;
