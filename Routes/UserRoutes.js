import express from "express";
import { login, registerNewUser } from "../Controllers/AuthController.js";

const router = express.Router();

router.post('/registration', registerNewUser);
router.post('/login', login);


export default router;
