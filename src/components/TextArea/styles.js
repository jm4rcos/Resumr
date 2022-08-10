import styled, { css } from 'styled-components';
import { colors } from '../../themes/colors';

export const StyledInput = styled.textarea`
  text-align: flex-start;
  resize: none;

  width: 89%;
  border-radius: 8px;
  outline: none;
  border: none;
  background: ${colors.background};
  padding: 10px  20px;

  ${(props) =>
    props.height &&
    css`
      height: ${props.height + "px"};
    `}
`;