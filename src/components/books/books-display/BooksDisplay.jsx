/* eslint-disable linebreak-style */
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { fetchRemoveBooks } from '../../../redux/books/books.actions';

const BooksDisplay = (props) => {
  const dispatch = useDispatch();

  const { bookList } = props;
  const removeElement = (id) => {
    dispatch(fetchRemoveBooks(id));
  };
  return (
    <div>
      <h1>Books Display</h1>
      <ul>
        {bookList.map((book) => (
          <div key={book.item_id}>
            <li>
              {book.title}
              {' '}
              {book.category}
            </li>
            <button type="button" onClick={() => removeElement(book.item_id)}>Remove</button>
          </div>
        ))}
      </ul>
    </div>
  );
};
export default BooksDisplay;

BooksDisplay.propTypes = {
  bookList: PropTypes.arrayOf(
    PropTypes.shape({
      item_id: PropTypes.string.isRequired,
      title: PropTypes.string,
      category: PropTypes.string,
    }),
  ).isRequired,
};
