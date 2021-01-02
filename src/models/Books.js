import mongoose from 'mongoose';

const BooksSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  author: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  prize: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Books = mongoose.model('Book', BooksSchema);

export default Books;