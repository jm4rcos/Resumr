import styled, { css } from 'styled-components';
import { colors } from '../../themes/colors';

export const StyledText = styled.p`
  overflow-wrap: break-word;
  word-wrap: break-word;
  word-break: break-word;

  ${(props) =>
    props.align &&
    css`
      text-align: ${props.align};
    `}

  ${(props) =>
    props.type === "title" &&
    css`
      color: ${props.color || colors.title};
      font-weight: ${props.weight || "500"};
      font-size: ${props.size || "20px"};
    `}

  ${(props) =>
    props.type === "text" &&
    css`
      color: ${props.color || colors.text};
      font-weight: ${props.weight || "300"};
      font-size: ${props.size || "16px"};
    `}

    ${(props) =>
    css`
      margin-bottom: ${props.mb + "px" || "0"};
      margin-top: ${props.mt + "px" || "0"};
    `}
`;