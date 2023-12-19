require("dotenv").config();
const mongoose = require("mongoose");
console.log(
    process.env.MONGODB_URI,
    "---------------MONGODB_URI----------------"
);

mongoose
    .connect(process.env.MONGODB_URI)
    .then((res) => {
        console.log("Database Connected");
    })
    .catch((error) => {
        console.log(error);
    });
