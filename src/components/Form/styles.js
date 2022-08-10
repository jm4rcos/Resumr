import styled, { css } from 'styled-components';
import { colors } from '../../themes/colors';

export const Container = styled.div`
  /* background-color: ${colors.light};
  display: grid;
  place-items: center;
  /* grid-template-columns: 1fr 2fr; */
  /* box-shadow: 0px 6px 14px 4px rgba(217, 217, 217, 0.74); */

  ${(props) => css`
    grid-template-columns: ${props.col};
    grid-template-rows: ${props.row};
  `}

  row-gap: 1rem;
  column-gap: 1.5rem;

  padding: 16px 0 30px 0;

  max-width: 600px;

  /* margin-top: 5em; */
`;