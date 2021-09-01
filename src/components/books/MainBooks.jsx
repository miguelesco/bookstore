/* eslint-disable linebreak-style */
import { useSelector } from 'react-redux';
import AddBook from './add-book/AddBook';
import BooksDisplay from './books-display/BooksDisplay';

const MainBooks = () => {
  const bookList = useSelector((state) => state.booksReducer);
  console.log(bookList);
  return (
    <div>
      <h1>Books</h1>
      <BooksDisplay bookList={bookList} />
      <AddBook />
    </div>
  );
};

export default MainBooks;
