const express = require("express");
const app = express();

// Connecting to database
require("./connection/conn");

app.use(express.json());

const bookRoute = require("./routes/booksRoute");

// CRUD operations
app.use("/api/v1", bookRoute);

// Starting the server

app.listen(2000, () => {
    console.log("Server Listening 2000");
});
