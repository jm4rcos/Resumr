import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: grid;
  /* place-items: center; */

  ${(props) => css`
    grid-template-columns: ${props.col};
    grid-template-rows: ${props.row};
  `}

  row-gap: 1rem;
  column-gap: 1.5rem;

  padding: 16px 0 30px 0;
  max-width: 600px;
`;