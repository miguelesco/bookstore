/* eslint-disable linebreak-style */
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../../../redux/books/books';

const BooksDisplay = (props) => {
  const dispatch = useDispatch();

  const { bookList } = props;
  const books = Object.keys(bookList);
  const removeElement = (id) => {
    dispatch(removeBook(id));
  };
  return (
    <div>
      <h1>Books Display</h1>
      <ul>
        {books.map((book) => (
          <div key={bookList[book].item_id}>
            <li>
              {bookList[book].title}
              {' '}
              {bookList[book].category}
            </li>
            <button type="button" onClick={() => removeElement(book)}>Remove</button>
          </div>
        ))}
      </ul>
    </div>
  );
};
export default BooksDisplay;

BooksDisplay.propTypes = {
  bookList: PropTypes.objectOf(
    PropTypes.shape({
      item_id: PropTypes.string.isRequired,
      title: PropTypes.string,
      category: PropTypes.string,
    }),
  ).isRequired,
};
