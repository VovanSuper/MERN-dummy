import React from 'react';
import styled from 'styled-components';

export const AppButton = styled.button.attrs({ className: 'btn' })`
  background: ${props => (props.primary ? 'var( --clr-accent-300)' : 'var(--clr-secondary-300)')};
  color: ${props => (props.primary ? 'var(--clr-secondary-300)' : 'var( --clr-accent-300)')};
  height: ${props => (props.height ? props.height : 'var(--ff-900)')};
  font-size: medium;
  margin: 1em;
  padding: 0.25em 1em;
  border: 1px solid var(--clr-secondary-500);
  border-radius: 0.5rem;
`;
