// 05-04
require("dotenv").config({ path: "backend/config/config.env" });

const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const path = require("path");

var cors = require('cors')
app.use(cors());

const errorMiddleware = require("./middleware/error");

// Config
if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({ path: "backend/config/config.env" });
}

app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload());

// Route Imports
const product = require("./routes/productRoute");
const user = require("./routes/userRoute");
const order = require("./routes/orderRoute");
const payment = require("./routes/paymentRoute");

// 05-04
// app.use("/users", product);
app.use("/", product);

app.use("/api/v1", user);
app.use("/api/v1", order);
app.use("/api/v1", payment);

// app.use(express.static(path.join(__dirname, "../frontend/build")));

// my-Change
// app.use(express.static(path.join(__dirname, "../frontend/public")));

// app.get("*", (req, res) => {
//   // res.sendFile(path.resolve(__dirname, "../frontend/build/index.html"));
//   // res.sendFile(path.resolve(__dirname, "../frontend/public/index.html"));
// });

app.use(express.static(path.join(__dirname, '../frontend/build')))
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/build'))
})

// Middleware for Errors
app.use(errorMiddleware);

module.exports = app;
