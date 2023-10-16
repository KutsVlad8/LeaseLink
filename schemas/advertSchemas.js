const Joi = require("joi");

const createAdvertSchema = Joi.object({
  year: Joi.number().required(),
  make: Joi.string().required(),
  model: Joi.string().required(),
  type: Joi.string().required(),
  img: Joi.string(),
  description: Joi.string().required(),
  fuelConsumption: Joi.string().required(),
  engineSize: Joi.string().required(),
  accessories: Joi.array().required(),
  functionalities: Joi.array().required(),
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

const updateAdvertSchema = Joi.object({
  year: Joi.number(),
  make: Joi.string(),
  model: Joi.string(),
  type: Joi.string(),
  img: Joi.string(),
  description: Joi.string(),
  fuelConsumption: Joi.string(),
  engineSize: Joi.string(),
  accessories: Joi.array(),
  functionalities: Joi.array(),
  rentalPrice: Joi.string(),
  rentalCompany: Joi.string(),
  address: Joi.string(),
  rentalConditions: Joi.string(),
  mileage: Joi.number(),
  favorite: Joi.boolean(),
}).messages({
  "number.base": "{{#label}} must be a number.",
  "string.base": "{{#label}} must be a string.",
  "any.required": "{{#label}} is required.",
});

const favoriteSchema = Joi.object({
  favorite: Joi.boolean().required(),
});

module.exports = { createAdvertSchema, updateAdvertSchema, favoriteSchema };
