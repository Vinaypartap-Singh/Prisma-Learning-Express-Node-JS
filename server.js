import "dotenv/config";

import express from "express";
import router from "./routes/index.js";
import postRouter from "./routes/PostRoutes.js";
const app = express();
const PORT = process.env.PORT | 3000;

app.use(express.json());
app.unsubscribe(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("Hi Server is working");
});

// User Route Middleware
app.use(router);

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
