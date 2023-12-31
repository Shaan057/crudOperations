require("dotenv").config();

const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());

const port = process.env.PORT || 2000;

// Connecting to database
require("./connection/conn");

app.use(express.json());

const bookRoute = require("./routes/booksRoute")
const userRoute = require("./routes/usersRoute")

// CRUD operations
app.use("/api/v1", bookRoute);
app.use("/api/v1", userRoute);

// Starting the server

app.listen(port, () => {
    console.log(`Server Listening to ${port}`);
});
