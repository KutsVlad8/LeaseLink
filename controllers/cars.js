const Cars = require("../models/cars");

// const Joi = require("joi");
const { HttpError, ctrlWrapper } = require("../helpers");
// const { ctrlWrapper } = require("../helpers");

// !=================== joi Schemas ================

// const addSchema = Joi.object({
//   name: Joi.string().required(),
//   email: Joi.string().required(),
//   phone: Joi.string().required(),
//   favorite: Joi.boolean(),
// });

// const updateSchema = Joi.object({
//   name: Joi.string(),
//   email: Joi.string(),
//   phone: Joi.string(),
//   favorite: Joi.boolean(),
// });

// const favoriteSchema = Joi.object({
//   favorite: Joi.boolean().required(),
// });

// !=================== controllers ================

// !======== контроллер для всех объявлени  машин ===========

const getAll = async (req, res) => {
  // const { _id } = req.cars;

  // const { page = 1, limit = 10 } = req.query;
  // const skip = (page - 1) * limit;

  // const result = await Cars.find({ _id }, "-createdAt -updateAT", {
  //   skip,
  //   limit,
  // });

  const result = await Cars.find();
  res.json(result);
};

// !======== контроллер для одного объявления  машины ===========

const getCarById = async (req, res) => {
  const { carId } = req.params;
  const result = await Cars.findOne({ _id: carId });

  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json(result);
};

// !======== контроллер для создания объявления ===========

// const create = async (req, res) => {
//   const { _id: owner } = req.user;

//   const { error } = addSchema.validate(req.body);
//   if (error) {
//     throw HttpError(404, "missing required name field");
//   }

//   const result = await Contact.create({ ...req.body, owner });
//   res.status(201).json(result);
// };

// !======== контроллер для изменения объявления ===========

// const updateContact = async (req, res) => {
//   const { _id: owner } = req.user;

//   const { error } = updateSchema.validate(req.body);
//   if (error) {
//     throw HttpError(404, "missing required name field");
//   }
//   const { contactId } = req.params;
//   const result = await Contact.findOneAndUpdate(
//     { _id: contactId, owner },
//     req.body,
//     {
//       new: true,
//     }
//   );

//   if (!result) {
//     throw HttpError(404, "Not found");
//   }
//   res.json(result);
// };

// !======== контроллер для добавления объявления в избранное  ===========
// const updateFavorite = async (req, res) => {
//   const { _id: owner } = req.user;

//   const { error } = favoriteSchema.validate(req.body);
//   if (error) {
//     throw HttpError(400, "missing field favorite");
//   }
//   const { contactId } = req.params;
//   const result = await Contact.findOneAndUpdate(
//     { _id: contactId, owner },
//     req.body,
//     {
//       new: true,
//     }
//   );

//   if (!result) {
//     throw HttpError(404, "Not found");
//   }
//   res.json(result);
// };

// !======== контроллер для удаления объявления ===========

// const remove = async (req, res) => {
//   const { _id: owner } = req.user;
//   const { contactId } = req.params;
//   const result = await Contact.findOneAndRemove({ _id: contactId, owner });

//   if (!result) {
//     throw HttpError(404, "Not found");
//   }

//   res.json({
//     message: "contact deleted",
//   });
// };

module.exports = {
  getAll: ctrlWrapper(getAll),
  getCarById: ctrlWrapper(getCarById),
  // create: ctrlWrapper(create),
  // updateContact: ctrlWrapper(updateContact),
  // updateFavorite: ctrlWrapper(updateFavorite),
  // remove: ctrlWrapper(remove),
};
