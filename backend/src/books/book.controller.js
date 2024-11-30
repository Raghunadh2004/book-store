const Book = require("./book.model");

const postABook = async(req,res) => {
    // console.log(req.body)
    try {
        const newBook = await Book({...req.body});
        await newBook.save();
        res.status(200).send({message: "Book posted successfully", book: newBook})
    } catch (error) {
        console.log(error)
        res.status(500).send({message: "Error while creating book"})
    }
}

const getAllBooks = async(req,res) => {
    try {
        const books = await Book.find().sort({ createdAt: -1});
        res.status(200).send(books)
    } catch (error) {
        console.log(error)
        res.status(500).send({message: "Error in getting all books"});
    }
}

const getSingleBook = async(req,res) => {
    try {
        const {id} = req.params;
        const book = await Book.findById(id); 
        if (!book)
        {
            res.status(404).send({message: "Book not found"})
        }
        res.status(200).send(book);
    } catch (error) {
        console.log(error)
        res.status(500).send({message: "Error in fetching the book"})
    }
}

const updateBook = async(req,res) =>{
    try {
        const {id} = req.params;
        const updatedBook = await Book.findByIdAndUpdate(id, req.body, {new: true});
        if (!updatedBook)
        {
            res.status(404).send({message:"Book not found!!"})
        }
        res.status(200).send({message:"Book details updated successfully",book:updateBook});        
    } catch (error) {
        console.log(error)
        res.status(500).send({message: "Error in updating the book"})
    }
}

const deleteBook = async(req,res) => {
    try {
        const {id} = req.params;
        const deletedBook = await Book.findByIdAndDelete(id);
        if (!deletedBook)
        {
            res.status(404).send({message:"Book not found!!"})
        }
        res.status(200).send({message:"Book deleted updated successfully",book:deletedBook});        
    } catch (error) {
        console.log(error)
        res.status(500).send({message: "Error in deleting the book",book:updateBook})
    }
}

module.exports = {
    postABook,
    getAllBooks,
    getSingleBook,
    updateBook,
    deleteBook
}