/* eslint-disable linebreak-style */
import styled from 'styled-components';
import { flex } from '../../../styles/breakPoints';

const Book = styled.li`
  ${flex('row', 'center', 'space-between')};
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 0.5rem;
  background-color: #fff;
  list-style: none;
`;

export const Description = styled.div`
  ${flex('column', 'flex-start', 'flex-start')};
  width: 100%;
  height: 100%;
  padding: 0.5rem;
  box-sizing: border-box;
`;

export const Category = styled.p`
  font-size: 16px;
  font-weight: bold;
  color: gray;
  margin: 0;
`;

export const Title = styled.p`
  font-size: 24px;
  font-weight: bold;
  color: black;
  margin: 0;
`;

export const Author = styled.p`
  font-size: 17px;
  font-weight: bold;
  color: lightskyblue;
  margin: 0;
`;

export const BtnContainer = styled.div`
  ${flex('row', 'flex-start', 'flex-start')};
  width: 100%;
  height: 100%;
  padding: 0.5rem;
  padding-left: 0;
  box-sizing: border-box;
  gap: 0.5rem;
`;

export const Btn = styled.button`
  ${flex('row', 'center', 'center')};
  width: 100%;
  height: 100%;
  padding: 0.5rem 0.1rem;
  box-sizing: border-box;
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  color: lightskyblue;
  font-size: 14px;
  font-weight: bold;
  &:hover {
    color: red;
  }
`;

export const RemoveBtn = styled(Btn)`
  padding: 0.5rem;
  border-right: 1px solid rgba(228, 241, 254, 1);
  border-left: 1px solid rgba(228, 241, 254, 1);
`;

export default Book;
