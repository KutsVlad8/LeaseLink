const express = require("express");

const ctrl = require("../../controllers/cars");

// const { isValidId, authenticate } = require("../../middlewares");

const router = express.Router();

// !======== запрос для всех объявлени  машин ===========
// router.get("/", authenticate, ctrl.getAll);
router.get("/", ctrl.getAll);

// !======== запрос для одного объявления  машины ===========
// router.get("/:contactId", authenticate, isValidId, ctrl.getContactById);
router.get("/:carId", ctrl.getCarById);

// !======== запрос для создания объявления ===========
// router.post("/", authenticate, ctrl.create);

// !======== запрос для изменения объявления ===========
// router.put("/:contactId", authenticate, isValidId, ctrl.updateContact);
// router.put("/:carId", authenticate, isValidId, ctrl.updateContact);

// !======== запрос для добавления объявления в избранное  ===========
// router.patch(
//   "/:contactId/favorite",
//   authenticate,
//   isValidId,
//   ctrl.updateFavorite
// );

// router.patch(
//   "/:carId/favorite",
//   authenticate,
//   isValidId,
//   ctrl.updateFavorite
// );

// !======== запрос для удаления объявления ===========
// router.delete("/:carId", authenticate, isValidId, ctrl.remove);

module.exports = router;
