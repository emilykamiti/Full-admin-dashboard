import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";

import clientRoutes from "./routes/client.js";
import generalRoutes from "./routes/general.js";
import managementRoutes from "./routes/management.js";
import salesRoutes from "./routes/sales.js";

import User from "./model/User.js";
import Product from "./model/Product.js";
import Transaction from "./model/Transaction.js";
import ProductStat from "./model/ProductStat.js";
import OverallStat from "./model/OverallStat.js";

import {
  dataOverallStat,
  dataProduct,
  dataTransaction,
  dataUser,
  dataProductStat,
} from "./data/index.js";

dotenv.config();

const app = express();

app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

//routes
app.use("/client", clientRoutes);
app.use("/general", generalRoutes);
app.use("/management", managementRoutes);
app.use("/sales", salesRoutes);

//MONGOOSE SETUP
const PORT = process.env.PORT || 9000;
mongoose
  .connect(process.env.MONGO_URL)
  .then(async () => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));

    //!ONLY ADD DATA ONE TIME
    try {
      // Delete existing data
      // await OverallStat.deleteMany({});
      // await Product.deleteMany({});
      // await Transaction.deleteMany({});
      // await ProductStat.deleteMany({});
      // await User.deleteMany({});

      // Insert new data
      // await OverallStat.insertMany(dataOverallStat);
      // await Product.insertMany(dataProduct);
      // await Transaction.insertMany(dataTransaction);
      // await ProductStat.insertMany(dataProductStat);
      // await User.insertMany(dataUser);

      console.log("Data refreshed successfully");
    } catch (error) {
      console.error("Error refreshing data:", error);
    }
  })
  .catch((error) => console.log(`${error} did not connect`));
