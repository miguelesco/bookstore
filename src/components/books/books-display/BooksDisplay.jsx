/* eslint-disable linebreak-style */
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { fetchRemoveBooks } from '../../../redux/books/books.actions';
import Book, {
  Description, Category, Title, Author, Btn, BtnContainer, RemoveBtn,
} from './styles';

const BooksDisplay = (props) => {
  const dispatch = useDispatch();

  const { bookList } = props;
  const removeElement = (id) => {
    dispatch(fetchRemoveBooks(id));
  };
  return (
    <div>
      <ul>
        {bookList.map((book) => (
          <Book key={book.item_id}>
            <Description>
              <Category>{book.category}</Category>
              <Title>{book.title}</Title>
              <Author>Suzanne Collins</Author>
              <BtnContainer>
                <Btn type="button">Comments</Btn>
                <RemoveBtn type="button" onClick={() => removeElement(book.item_id)}>Remove</RemoveBtn>
                <Btn type="button">Edit</Btn>
              </BtnContainer>
            </Description>
          </Book>
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
