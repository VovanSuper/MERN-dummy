import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import LogoSvg from './Logo';

const Header = styled.header`
  width: 100%;
  display: flex;
  background-color: #42c;
  align-items: center;

  & > .logo {
    flex: 0 0 2.5rem;
    max-width: 3rem;
    margin: auto;
  }
`;

const Logo = styled(LogoSvg)`
  max-height: 80%;
  object-fit: contain;
`;

const Nav = styled.nav`
  max-width: 100%;
  flex: auto;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-family: 'BansheeStd';
  gap: 2rem;
  padding: 1rem;
`;
const LinkBtn = styled(NavLink)`
  padding: 1rem;
  font-size: larger;
  min-width: 7rem;
  color: #0b0a1f;
  background-color: #88ccbbbf;
  border: 1px solid #005252;
  box-shadow: 4px 4px 8px 0px #223c50c3;
  border-radius: 0.5rem;
  text-decoration: none;
  &.active {
    color: #035dac;
    background-color: #88ccb1;
  }
  &:hover:not(.active) {
    color: #b3b2cc;
    background-color: #88ccbb99;
    border: 1px solid #316363;
    box-shadow: 1px 4px 8px 0px #223c50ae;
  }
`;

export default () => {
  return (
    <Header className='header'>
      <Logo className='logo' />
      <Nav>
        <LinkBtn to='/main' activeClassName='active'>
          Main Page
        </LinkBtn>
        <LinkBtn to='/data' activeClassName='active'>
          Data Page
        </LinkBtn>
      </Nav>
    </Header>
  );
};
