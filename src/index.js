import express from "express";

const app = express();

app.use("/test", (req, res) => {
  res.send("Hello test");
});

app.use("/", (req, res) => {
  res.send("Hello server");
});

app.listen(3000, () => {
  console.log("listening to port 3000");
});
