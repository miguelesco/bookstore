/* eslint-disable linebreak-style */
import PropTypes from 'prop-types';

const BooksDisplay = (props) => {
  const { books } = props;
  return (
    <div>
      <h1>Books Display</h1>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            {book.title}
            {' '}
            {book.category}
          </li>
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
};
