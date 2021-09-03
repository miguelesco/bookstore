/* eslint-disable linebreak-style */
import { useState } from 'react';
import uuid from 'react-uuid';
import { useDispatch } from 'react-redux';
import { fetchAddNewBook } from '../../../redux/books/books.actions';
import {
  Title, Form, Container, BookTitleInput, BookCategorySelect, AddBtn,
} from './styles';

const options = [
  { id: 1, name: 'tech' },
  { id: 2, name: 'business' },
  { id: 3, name: 'science' },
  { id: 4, name: 'health' },
  { id: 5, name: 'entertainment' },
  { id: 6, name: 'sports' },
  { id: 7, name: 'travel' },
  { id: 8, name: 'food' },
];

const AddBook = () => {
  const dispatch = useDispatch();
  const [book, setBook] = useState({
    item_id: uuid(),
    title: '',
    category: '',
  });
  const handdleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchAddNewBook(book));
    setBook({
      item_id: uuid(),
      title: '',
      category: '',
    });
  };
  const onInputChange = (e) => {
    setBook({
      ...book,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <Container>
      <Title>Add new Book</Title>
      <Form onSubmit={handdleSubmit}>
        <BookTitleInput value={book.title} name="title" placeholder="Book Title" onChange={(e) => onInputChange(e)} />
        <BookCategorySelect name="category" defaultValue="category" onChange={(e) => onInputChange(e)}>
          <option value="category" disabled>Category</option>
          {options.map((option) => (
            <option
              key={option.id}
              value={option.name}
            >
              {option.name}
            </option>
          ))}

        </BookCategorySelect>
        <AddBtn type="submit">ADD BOOK</AddBtn>
      </Form>
    </Container>
  );
};

export default AddBook;
