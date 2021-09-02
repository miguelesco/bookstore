/* eslint-disable linebreak-style */
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchGetBooks } from '../../redux/books/books.actions';
import Container from './styles';
import AddBook from './add-book/AddBook';
import BooksDisplay from './books-display/BooksDisplay';

const MainBooks = () => {
  const store = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchGetBooks());
  }, []);
  const bookList = store.booksReducer;

  return (
    <Container>
      <BooksDisplay bookList={bookList} />
      <AddBook />
    </Container>
  );
};

export default MainBooks;
