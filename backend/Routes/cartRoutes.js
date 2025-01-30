const express = require('express');
const router = express.Router();

let cart = [];

// Get cart items
router.get('/', (req, res) => {
  res.json(cart);
});

// Add item to cart
router.post('/', (req, res) => {
  const { book } = req.body;
  cart.push(book);
  res.status(201).json({ message: 'Book added to cart', cart });
});

// Remove item from cart
router.delete('/:index', (req, res) => {
  const index = req.params.index;
  if (index >= 0 && index < cart.length) {
    cart.splice(index, 1);
    res.json({ message: 'Book removed from cart', cart });
  } else {
    res.status(400).json({ message: 'Invalid cart index' });
  }
});

module.exports = router;
