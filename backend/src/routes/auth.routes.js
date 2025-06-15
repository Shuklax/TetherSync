import express from "express";
import { login, logout, signup } from "../controller/auth.controller.js";
import { onboard } from "../controller/auth.controller.js";
import { protectRoute } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/signup", signup);

router.post("/login", login);

router.post("/logout", logout);

router.post("/onboarding", protectRoute, onboard);

router.get("/me", protectRoute, function (req, res) {
  res.status(200).json({ success: true, user: req.user });
});

export default router;
