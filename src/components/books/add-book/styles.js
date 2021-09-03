/* eslint-disable linebreak-style */
import styled from 'styled-components';
import { flex } from '../../../styles/breakPoints';
import { Btn } from '../books-display/styles';

export const Container = styled.div`
  ${flex('column', 'flex-start', 'flex-start')};
  width: 100%;
  height: 100%;
  padding: 1rem;
  border-radius: 5px;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  margin-bottom: 5rem;
`;

export const Title = styled.h1`
  font-size: 2.5em;
  color: gray;
`;

export const Form = styled.form`
  ${flex('row', 'flex-start', 'flex-start')};
  width: 100%;
  gap: 2rem;
`;

const Input = styled.input`
  font-size: 20px;
  padding: 0.8rem;
  ::placeholder {
    color: gray;
    opacity: 0.8;
  }
`;

export const BookTitleInput = styled(Input)`
  width: 50%;
  
`;

export const BookCategorySelect = styled.select`
  font-size: 20px;
  padding: 0.8rem;
  color: gray;
  opacity: 0.8;
  width: 30%;
`;

export const AddBtn = styled(Btn)`
  background-color: #0290ff;
  transition: all 0.3s ease-in-out;
  width: 20%;
  height: 100%;
  padding: 1rem;
  border-radius: 5px;
  &:hover {
    padding: 1.1rem;
    color: orange;
  } 
`;
