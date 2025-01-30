const express = require('express');
const bookController = require('../controllers/bookControllers'); // Fixed file name and import

const router = express.Router();

router.get('/', bookController.getAllBooks);
router.post('/', bookController.addBook);

module.exports = router;
