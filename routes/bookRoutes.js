const router = require('express').Router();
const auth = require('../middleware/authMiddleware');
const {
  createBook,
  getAllBooks,
  getBookById,
  updateBook,
  deleteBook
} = require('../controllers/bookController');

// Public
router.get('/', getAllBooks);
router.get('/:id', getBookById);

// Protected
router.post('/', auth, createBook);
router.put('/:id', auth, updateBook);
router.delete('/:id', auth, deleteBook);

module.exports = router;
