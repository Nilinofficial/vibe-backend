import express from "express";
import { Register } from "../controller/authController";

const router = express.Router();

router.post("/register",Register)