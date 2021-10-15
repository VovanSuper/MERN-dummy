import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  display: grid;
  place-content: center;
  background-color: #0ea0502c;
  backdrop-filter: blur(2px);

  font-weight: normal;
  font-style: italic;
  bottom: 0;
  left: 0;
  min-height: 4rem;
  right: 0;
  position: fixed;

  & > span {
    font-size: small;
    color: #0d00ff;
  }
  & > small {
    display: block;
    color: #6200ff;
    font-size: xx-small;
    text-align: center;
  }
`;

export default () => (
  <FooterContainer className='footer-container'>
    <a className='no-underline' href='https://github.com/vovansuper' target='_blank'>
      <span> Vladimir Ovsyukov (vovansuper@mail.ru) </span>
    </a>
    <small>All rights reserved (c)</small>
  </FooterContainer>
);
