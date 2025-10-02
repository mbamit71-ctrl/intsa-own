import express from "express";
import { register, login, logout,home } from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);
router.post("/home", home);

export default router;
