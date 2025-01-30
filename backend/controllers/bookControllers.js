const Book = require('../models/Book');

// Get all books
const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ message: 'Server error: Unable to fetch books' });
  }
};

// Add a new book
const addBook = async (req, res) => {
  const { title, author, price, category, description } = req.body;

  if (!title || !author || !price || !category || !description) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const newBook = new Book({ title, author, price, category, description });
    await newBook.save();
    res.status(201).json(newBook);
  } catch (error) {
    res.status(500).json({ message: 'Error adding book to the database' });
  }
};

module.exports = { getAllBooks, addBook };
