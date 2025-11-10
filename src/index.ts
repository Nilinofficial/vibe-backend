import express from "express";
import { connectToDB } from "./config/database";
import dotenv from "dotenv";
import authRouter from "./routes/authRouter";

dotenv.config();
const app = express();

app.use(express.json());

app.use("/api/auth", authRouter);

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
