import React from 'react';
import styled from 'styled-components';

const ItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 1rem;
  width: 100%;
  line-height: 3rem;
  border: 1px solid var(--data-item-gradient);
  background-color: var(--linear-gradient);
  color: var(--clr-primary-300);

  & > .item-id {
    font-family: 'Yandex Sans Text';
    font-size: x-small;
    flex: 0 1 1rem;
  }
  & > .item-name {
    font: normal normal medium;
    flex: 1 1 10%;
  }
  & > .item-status {
    font: normal normal medium;
    flex: 1 1 5%;
  }
`;

export default ({ item }) => (
  <ItemContainer className='data-item'>
    <span className='item-id'>{item.id}</span>
    <div className='item-name'>{item.name}</div>
    <div className='item-status'>{item.status}</div>
  </ItemContainer>
);
