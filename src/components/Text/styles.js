import styled, { css } from 'styled-components';
import { colors } from '../../themes/colors';

export const StyledText = styled.p`
  ${(props) =>
    props.align &&
    css`
      text-align: ${props.align};
      align-items: ${props.align};
    `}

  ${(props) =>
    props.type === "title" &&
    css`
      color: ${colors.title};
      font-weight: 600;
    `}

  ${(props) =>
    props.type === "text" &&
    css`
      color: ${colors.text};
      font-weight: 400;
    `}
`;