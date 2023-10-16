const { Schema, model } = require("mongoose");
const Joi = require("joi");

const { handleMongooseError } = require("../helpers");

const advertsSchema = new Schema(
  {
    year: {
      type: Number,
      required: true,
    },
    make: {
      type: String,
      required: true,
    },
    model: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    fuelConsumption: {
      type: String,
      required: true,
    },
    engineSize: {
      type: String,
      required: true,
    },
    accessories: {
      type: Array,
      required: true,
    },
    functionalities: {
      type: Array,
      required: true,
    },
    rentalPrice: {
      type: String,
      required: true,
    },
    rentalCompany: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    rentalConditions: {
      type: String,
      required: true,
    },
    mileage: {
      type: Number,
      required: true,
    },
    favorite: {
      type: Boolean,
      default: false,
    },
  },
  { versionKey: false, timestamps: true }
);

advertsSchema.post("save", handleMongooseError);

const Adverts = model("adverts", advertsSchema);

const createAdvertSchema = Joi.object({
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

const updateAdvertSchema = Joi.object({
  year: Joi.number(),
  make: Joi.string(),
  model: Joi.string(),
  type: Joi.string(),
  img: Joi.string(),
  description: Joi.string(),
  fuelConsumption: Joi.string(),
  engineSize: Joi.string(),
  accessories: Joi.string(),
  functionalities: Joi.string(),
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

module.exports = { Adverts, createAdvertSchema, updateAdvertSchema };
