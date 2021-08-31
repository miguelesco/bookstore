/* eslint-disable linebreak-style */
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../../../redux/books/books';

const BooksDisplay = (props) => {
  const dispatch = useDispatch();

  const { books, propsRemoveBook } = props;
  const removeElement = (id) => {
    propsRemoveBook(id);
    dispatch(removeBook(id));
  };
  return (
    <div>
      <h1>Books Display</h1>
      <ul>
        {books.map((book) => (
          <div key={book.id}>
            <li>
              {book.title}
              {' '}
              {book.category}
            </li>
            <button type="button" onClick={() => removeElement(book.id)}>Remove</button>
          </div>
        ))}
      </ul>
    </div>
  );
};
export default BooksDisplay;

BooksDisplay.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string,
      category: PropTypes.string,
    }),
  ).isRequired,
  propsRemoveBook: PropTypes.func.isRequired,
};
