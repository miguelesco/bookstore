/* eslint-disable linebreak-style */
import { useState } from 'react';
import AddBook from './add-book/AddBook';
import BooksDisplay from './books-display/BooksDisplay';

const MainBooks = () => {
  const [books, setBooks] = useState([
    { id: '1', title: 'Harry Potter and the Chamber of Secrets', category: 'Fiction' },
    { id: '2', title: 'Jurassic Park', category: 'Science Fiction' },
  ]);
  const handdleNewBook = ({ title = '', category = '', id }) => {
    setBooks([...books, { title, category, id }]);
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
