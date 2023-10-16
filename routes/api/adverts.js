const express = require("express");

const { ctrlAdverts } = require("../../controllers");

// const { isValidId, authenticate } = require("../../middlewares");

const router = express.Router();

// !======== запрос для всех объявлени  машин ===========

router.get("/", ctrlAdverts.getAll);

// !======== запрос для одного объявления  машины ===========

router.get("/:advertId", ctrlAdverts.getAdvertById);

// !======== запрос для создания объявления ===========
// router.post("/", authenticate, ctrlAdverts.createAdvert);
router.post("/", ctrlAdverts.createAdvert);

// !======== запрос для изменения объявления ===========
// router.put("/:advertId", authenticate, isValidId, ctrlAdverts.updateContact);
router.put("/:advertId", ctrlAdverts.updateAdvert);

// !======== запрос для добавления объявления в избранное  ===========
// router.patch(
//   "/:advertId/favorite",
//   authenticate,
//   isValidId,
//   ctrlAdverts.addToFavorite
// );

router.patch("/:advertId/favorite", ctrlAdverts.addToFavorite);

// !======== запрос для удаления объявления ===========
// router.delete("/:advertId", authenticate, isValidId, ctrlAdverts.removeAdvert);
router.delete("/:advertId", ctrlAdverts.removeAdvert);

module.exports = router;
