import express from 'express';

import booksController from '../controllers/booksController.js';

const router = express.Router();

router.get('/books', booksController.get);
router.post('/books', booksController.post);
router.put('/books/:id', booksController.put);
router.delete('/books/:id', booksController.delete);

export default router;