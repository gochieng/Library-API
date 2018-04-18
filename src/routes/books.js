import express from 'express';
import { findBooks, findBook, addBook, updateBook, deleteBook } from '../controllers/books';


const router = express.Router();

router.get('/', findBooks);
router.post('/', addBook);
router.get('/:id', findBook);
router.put('/:id', updateBook);
router.delete('/:id', deleteBook);

export default router;
