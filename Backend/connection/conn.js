const mongoose = require("mongoose");

mongoose
    .connect(process.env.MONGODB_URI)
    .then((res) => {
        console.log("Database Connected");
    })
    .catch((error) => {
        console.log(error);
        process.exit(1)
    });
