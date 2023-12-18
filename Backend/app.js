const express = require("express");
const app = express();
const cors = require("cors");

require("dotenv").config();

app.use(cors());

const port = process.env.PORT;

// Connecting to database
require("./connection/conn");

// app.use(express.json());
app.use(express.json({ limit: "10mb" }));
const bookRoute = require("./routes/booksRoute");

// CRUD operations
app.use("/api/v1", bookRoute);

// Starting the server

app.listen(2000, () => {
    console.log("Server Listening 2000");
});
