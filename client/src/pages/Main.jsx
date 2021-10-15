import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

import { AppButton } from '../components/AppButton';

const MainContainer = styled.section`
  padding: 5rem;
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 1rem;

  & > .nav-btn {
    max-height: 4rem;
    width: auto;
  }

  & > .main-content {
    margin: 1rem;
    width: 100%;
    text-align: center;
    padding: 1rem 0.5 rem;
    font-size: x-large;
    font-family: 'Yandex Sans Display';
  }
`;

export default () => {
  const history = useHistory();

  return (
    <MainContainer>
      <AppButton className='nav-btn' primary={true} onClick={() => history.push('/data')}>
        Show Rick'n'Morthy
      </AppButton>
      <div className='main-content'>Main Component</div>
    </MainContainer>
  );
};
