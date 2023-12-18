const mongoose = require("mongoose");

const booksSchema = new mongoose.Schema({
    bookname: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    author: { type: String, required: true },
    imageurl: { type: String, required: true },
});

module.exports = new mongoose.model("books", booksSchema);
