
import express from "express";
import { getproduit } from "../controlleur/controlleur.js";

const router = express.Router();

router.get("/aliments", getproduit);

export default router;
