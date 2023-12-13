const mongoose = require("mongoose");

mongoose
    .connect(
        "mongodb+srv://roshansp639:Us2ivpsOun4II5u7@cluster0.q2jjitk.mongodb.net/crudoperations?retryWrites=true&w=majority"
    )
    .then((res) => {
        console.log("Database Connected");
    })
    .catch((error) => {
        console.log(error);
    });
