/* eslint-disable linebreak-style */
import uuid from 'react-uuid';
import {
  ADD_BOOK, REMOVE_BOOK, UPDATE_APP_ID, UPDATE_BOOKS,
} from './books.types';

const initialState = [
  {
    item_id: uuid(),
    title: "The Handmaid's Tale",
    category: 'Fiction',
  },
  {
    item_id: uuid(),
    title: 'Great Expectations',
    category: 'Classics',
  },
];

const BookReducer = (state = initialState, action) => {
  let booksList = [...state];
  switch (action.type) {
    case ADD_BOOK:
      booksList.push(action.payload);
      return booksList;

    case REMOVE_BOOK:
      booksList = booksList.filter((book) => book.item_id !== action.id);
      return booksList;

    case UPDATE_BOOKS: {
      const fetchBooks = Object.keys(action.payload)
        .map((key) => ({ ...action.payload[key][0], item_id: key }));
      booksList = [...booksList, ...fetchBooks];
      return booksList;
    }
    case UPDATE_APP_ID:
      // APP_ID = action.id;
      return booksList;

    default:
      return booksList;
  }
};

export default BookReducer;
