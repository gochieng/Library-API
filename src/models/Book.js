import mongoose from 'mongoose';

const { Schema } = mongoose;

const schema = Schema({
  title: String,
  author: String,
  publisher: String,
});

const Book = mongoose.model('Book', schema);

export default Book;
