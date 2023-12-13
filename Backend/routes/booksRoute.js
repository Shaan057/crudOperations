const router = require("express").Router();

const bookModel = require("../models/booksModel");

// POST Books
router.post("/add", async (req, res) => {
    try {
        const data = req.body;
        const newBook = new bookModel(data);
        await newBook.save().then(() => {
            res.status(200).json({ message: "Book Added Successfully" });
        });
    } catch (error) {
        console.log(error);
    }
});

// GET Books
router.get("/getBooks", async (req, res) => {
    let books;
    try {
        books = await bookModel.find();
        res.status(200).json({ books });
    } catch (error) {
        console.log(error);
    }
});

// GET Book By Id
router.get("/getBooks/:id", async (req, res) => {
    let book;
    const { id } = req.params;
    try {
        book = await bookModel.findById(id);
        res.status(200).json({ book });
    } catch (error) {
        console.log(error);
    }
});

// Update Book By Id

router.put("/updateBook/:id", async (req, res) => {
    let book;
    const { id } = req.params;
    const { bookname, description, price, author, imageurl } = req.body;
    try {
        book = await bookModel.findByIdAndUpdate(id, {
            bookname,
            description,
            price,
            author,
            imageurl,
        });
        book = await book.save().then(() => {
            res.status(200).json(book);
        });
    } catch (error) {
        console.log(error);
    }
});

// Delete Book By Id

router.delete("/deleteBook/:id", async (req, res) => {
    const { id } = req.params;
    try {
        await bookModel.findByIdAndDelete(id).then(() => {
            res.status(201).json({ message: "Book Deleted Successfully" });
        });
    } catch (error) {
        console.log(error);
    }
});

module.exports = router;
