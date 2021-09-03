/* eslint-disable linebreak-style */
import styled from 'styled-components';
import { flex } from '../../styles/breakPoints';

const Container = styled.div`
  ${flex('column', 'center', 'center')};
  background-color: #333;
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
`;

export default Container;
