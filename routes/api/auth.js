const express = require("express");
const router = express.Router();
const { ctrlAuth } = require("../../controllers");
const { authenticate, validateBody } = require("../../middlewares");
const { registerSchema, loginSchema } = require("../../schemas/authSchema");

router.post("/register", validateBody(registerSchema), ctrlAuth.register);

router.post("/login", validateBody(loginSchema), ctrlAuth.logIn);

router.get("/current", authenticate, ctrlAuth.getCurrentUser);

router.post("/logout", authenticate, ctrlAuth.logOut);

module.exports = router;
