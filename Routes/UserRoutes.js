import express from "express";
import { login, registerNewUser } from "../Controllers/AuthController.js";

const router = express.Router();

router.post('/registeration', registerNewUser);
router.get('/login', login);


export default router;
