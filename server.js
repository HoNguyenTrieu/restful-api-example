require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const productRouter = require("./routers/productRouter");

const app = express();
app.use(express.json());

app.use("/api/products", productRouter);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log("Server is running on port: ", port);
});

// Connect MongoDB
const URI = process.env.MONGODB_URL;
mongoose.connect(
  URI,
  {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) throw err;
    console.log("MongoDB is connected");
  }
);
