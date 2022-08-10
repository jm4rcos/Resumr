import styled, { css } from 'styled-components';
import { colors } from '../../themes/colors';

export const StyledButton = styled.button`
  padding: 10px 20px;
  outline: none;
  border: none;
  color: ${colors.light};
  border-radius: 8px;
  cursor: pointer;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 160px;

  ${(props) =>
    props.width &&
    css`
      width: ${props.width};
    `}

  ${(props) =>
    props.model === "solid" &&
    css`
      background-color: ${colors.primary};
      box-shadow: 0px 10px 25px ${colors.shadowBlue};
    `}
    
    ${(props) =>
    props.model === "success" &&
    css`
      background-color: ${colors.success};
      box-shadow: 0px 10px 25px ${colors.shadowGreen};
    `}

    ${(props) =>
    props.model === "add" &&
    css`
      background-color: transparent;
      color: ${colors.primary};
      border: 2px dashed ${colors.primary};
    `};

  ${(props) =>
    props.model === "outline" &&
    css`
      background-color: transparent;
      color: ${colors.primary};
      border: none;
      max-height: 18px;
    `};

  ${(props) =>
    props.disabled &&
    css`
      background-color: ${colors.placeholder};
      cursor: not-allowed;
      box-shadow: none;
    `}
`;