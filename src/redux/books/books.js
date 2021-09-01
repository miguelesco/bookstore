/* eslint-disable linebreak-style */
import uuid from 'react-uuid';

const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';

const initialState = {
  1: {
    item_id: uuid(),
    title: "The Handmaid's Tale",
    category: 'Fiction',
  },
  2: {
    item_id: uuid(),
    title: 'Great Expectations',
    category: 'Classics',
  },
};

export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const removeBook = (id) => ({
  type: REMOVE_BOOK,
  id,
});

const BookReducer = (state = initialState, action) => {
  const booksList = { ...state };
  switch (action.type) {
    case ADD_BOOK:
      booksList[action.payload.item_id] = action.payload;
      return booksList;
    case REMOVE_BOOK:
      delete booksList[action.id];
      return booksList;
    default:
      return booksList;
  }
};

export default BookReducer;
