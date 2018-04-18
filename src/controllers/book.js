import Book from '../models/Book';


// retrieve all books from the database
export const findBooks = (req, res) => {
  const query = {};

  if (req.query.category) {
    query.category = req.query.category;
  }

  Book.find(query, (err, books) => {
    if (err) {
      res.status(500).json(err);
    } else {
      res.status(200).json(books);
    }
  });
};

// helper function
const getBook = (req, res) => {
  const { id } = req.params;
  const notFoundMessage = book => `Book not found with id ${book}`;

  return new Promise((resolve, reject) => Book.findById(id, (err, book) => {
    if (!book) reject(res.status(404).json({ message: notFoundMessage(id) }));

    if (err) {
      reject(res.status(500).json({
        message: `Error retrieving book with id ${id}`,
      }));
    }

    resolve(book);
  }));
};

// find a single book given the id
export const findBook = (req, res) => {
  getBook(req, res).then(book => res.status(200).json(book));
};

// add a book into the library
export const addBook = (req, res) => {
  const book = new Book(req.body);

  book.save((err) => {
    if (err) {
      return res.status(500).json(err);
    }

    return res.status(201).json(book);
  });
};

// update a book entry
export const updateBook = (req, res) => {
  getBook(req, res).then((book) => {
    book.title = req.body.title;
    book.author = req.body.author;
    book.category = req.body.category;
    book.edition = req.body.edition;
    book.copyright = req.body.copyright;
    book.publisher = req.body.publisher;

    book.save((err) => {
      if (err) {
        return res.status(500).json(err);
      }

      return res.status(201).json(book);
    });
  });
};

// delete a book from the library
export const deleteBook = (req, res) => {
  getBook(req, res).then((book) => {
    book.remove((err) => {
      if (err) {
        return res.status(500).json(err);
      }

      return res.status(200).json({ message: 'Book deleted!' });
    });
  });
};
