/* eslint-disable linebreak-style */
import styled from 'styled-components';
import device, { flex } from '../../../styles/breakPoints';

export const Container = styled.div`
  width: 100%;
  padding: 1rem 1rem;
  box-sizing: border-box;
`;

const Book = styled.li`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 0.5rem;
  background-color: #fff;
  list-style: none;
  display: grid;
  place-items: center;
  @media ${device.xs} {
    grid-template-columns: 1fr;
    grid-auto-rows: auto;
  }
  @media ${device.sm} {
    grid-template-columns: 1fr 1fr 1fr;
    grid-auto-rows: auto;
    column-gap: 1rem;
  }
  @media ${device.lg} {
    grid-template-columns: 1fr 1fr 1fr;
    grid-auto-rows: auto;
    column-gap: 6rem;
  }
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
  font-weight: 800;
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

export const Porcentage = styled.div`
  ${flex('row', 'center', 'center')};
  width: 100%;
  height: 100%;
  padding: 0.5rem;
  box-sizing: border-box;
  color: black;
`;

export const Chart = styled.div`
  position: relative;
  width: 84px;
  height: 68px;
  margin: 5px;
`;

export const Arc = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 68px;
  height: 68px;
  border-radius: 100%;
  border: 5px solid;
`;

export const ArcStart = styled(Arc)`
  border-color: transparent #e8e8e8 #e8e8e8 #e8e8e8;
  transform: rotate(45deg);
  z-index: 50;
`;

export const ArcEnd = styled(Arc)`
  border-color: #0290ff #0290ff #0290ff transparent;
  transform: rotate(45deg);
  z-index: 100;
`;

export const PorcentageText = styled.div`
  ${flex('column', 'center', 'center')};
  span {
    font-size: 26px;
    font-weight: 400;
    color: black;
    margin: 0;
  }
  p {
    font-size: 18px;
    font-weight: 400;
    color: gray;
    margin: 0;
  }
`;

export const Chapters = styled.div`
  ${flex('column', 'center', 'center')};
  width: 100%;
  height: 100%;
  span {
    font-size: 16px;
    font-weight: 600;
    color: #c3c3c3;
  }
  p {
    font-size: 18px;
    font-weight: 700;
    color: gray;
  }
`;

export const UpdateBtn = styled(Btn)`
  background-color: #0290ff;
  transition: all 0.3s ease-in-out;
  padding: 0;
  width: 80%;
  height: 0;
  padding: 1rem;
  border-radius: 5px;
  &:hover {
    padding: 1.1rem;
    color: orange;
  } 
`;

export default Book;
