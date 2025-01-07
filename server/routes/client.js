import express from "express";
import {
  getProducts,
  getCustomers,
  getTransactions,
  getGeography,
  getOverallStat,
} from "../controllers/client.js";
const router = express.Router();

router.get("/products", getProducts);
router.get("/customers", getCustomers);
router.get("/transactions", getTransactions);
router.get("/geography", getGeography);
router.get("/overallStat", getOverallStat);
export default router;
