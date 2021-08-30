/* eslint-disable linebreak-style */
import { useState } from 'react';
import uuid from 'react-uuid';
import AddBook from './add-book/AddBook';
import BooksDisplay from './books-display/BooksDisplay';

const MainBooks = () => {
  const [books, setBooks] = useState([
    { id: uuid(), title: 'Don Quijote', category: 'History' },
    { id: uuid(), title: 'The Great Gatsby', category: 'Fiction' },
  ]);
  const handdleNewBook = ({ title = '', category = '' }) => {
    setBooks([...books, { title, category, id: uuid() }]);
  };
  const propsRemoveBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };
  return (
    <div>
      <h1>Books</h1>
      <BooksDisplay books={books} propsRemoveBook={propsRemoveBook} />
      <AddBook handdleNewBook={handdleNewBook} />
    </div>
  );
};

export default MainBooks;
