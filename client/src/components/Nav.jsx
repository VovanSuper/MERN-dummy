import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  width: 100%;
  height: 5rem;
  display: flex;
  align-items: center;
  background-color: #42c;
  justify-content: flex-end;
  gap: 2rem;
  padding: 1rem;
`;
const LinkBtn = styled(Link)`
  padding: 0.5rem;
  font-size: larger;
  min-width: 7rem;
  background-color: #8cb;
  border: 1px solid #005252;
  border-radius: 1rem;
`;

export default () => {
  return (
    <header className='header'>
      <Nav>
        <LinkBtn to='/'>Main Page</LinkBtn>
        <LinkBtn to='/data'>Data Page</LinkBtn>
      </Nav>
    </header>
  );
};
