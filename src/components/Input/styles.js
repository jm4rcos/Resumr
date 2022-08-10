import styled, { css } from 'styled-components';
import { colors } from '../../themes/colors';

export const StyledInput = styled.input`
  text-align: flex-start;
  vertical-align: text-top;

  width: 89%;
  height: 40px;
  border-radius: 8px;
  outline: none;
  border: none;
  background: ${colors.background};
  padding: 0 20px;

  ${(props) =>
    props.height &&
    css`
      height: ${props.height + "px"};
    `}
`;