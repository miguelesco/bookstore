/* eslint-disable linebreak-style */
import styled from 'styled-components';

const NavbarContainer = styled.nav`
  background-color: #fff;
  border-bottom: 1px solid #e5e5e5;
  box-shadow: 0 1px 0 rgba(9, 30, 66, 0.05);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0.5rem 1rem;
  width: 100%;
  z-index: 1;
  box-sizing: border-box;
  ul {
    flex-direction: row;
    display: flex;
    gap: 0.5rem;
    list-style: none;
  }
`;

export default NavbarContainer;
