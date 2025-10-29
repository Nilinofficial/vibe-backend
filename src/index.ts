import express from "express";
import { connectToDB } from "./config/database";
import dotenv from "dotenv";

dotenv.config();
const app = express();

connectToDB()
  .then(() => {
    console.log("successfully connected to db");
    app.listen(process.env.PORT, () => {
      console.log(`Server is running at port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.error(err);
  });
