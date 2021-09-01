/* eslint-disable linebreak-style */
import axios from 'axios';
import {
  ADD_BOOK, APP_ID, BASE_URL, REMOVE_BOOK, UPDATE_APP_ID, UPDATE_BOOKS,
} from './books.types';

export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const updateBooks = (payload) => ({
  type: UPDATE_BOOKS,
  payload,
});

export const removeBook = (id) => ({
  type: REMOVE_BOOK,
  id,
});

export const updateAppId = (id) => ({
  type: UPDATE_APP_ID,
  id,
});

export const getAppId = () => (dispatch) => {
  axios.post(`${BASE_URL}/apps`)
    .then((res) => {
      dispatch(updateAppId(res.data));
    })
    .catch((err) => {
      console.log(err);
    });
};

export const fetchAddNewBook = (newBook) => (dispatch) => {
  axios.post(`${BASE_URL}/apps/${APP_ID}/books`, newBook)
    .then((res) => {
      dispatch(addBook(res.data));
    })
    .catch((err) => {
      console.log(err);
    });
};

export const fetchGetBooks = () => (dispatch) => {
  try {
    axios.get(`${BASE_URL}/apps/${APP_ID}/books`)
      .then((response) => {
        console.log('peticion', response.data);
        dispatch(updateBooks(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  } catch (error) {
    console.log(error);
  }
};
