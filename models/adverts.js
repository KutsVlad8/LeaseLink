const { Schema, model } = require("mongoose");

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

module.exports = Adverts;
