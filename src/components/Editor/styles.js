import styled, { css } from 'styled-components';
import { colors } from '../../themes/colors';

export const Container = styled.div`
  position: relative;
  border-radius: 5px;
  padding: 0;

  ${({ v, h }) => css`
    margin-top: ${v}px;
    margin-left: ${h}px;
  `}

  transition: .25s ease-in-out;

  /* & input {
    display: none;
    width: 40px;
    height: 40px;
    border: none;
    outline: none;
    cursor: pointer;
    border-radius: 50%;
    position: absolute;
    bottom: -40px;
  } */

  :hover {
    background-color: ${colors.border};
    cursor: pointer;

    & .arrowUp,
    .arrowDown,
    .arrowLeft,
    .arrowRight,
    .colorEdit {
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0.5;
    }

    /* & input {
      display: flex;
    } */
  }

  & .arrowLeft {
    height: 100%;
    justify-content: center;
    background-color: ${colors.light};
    position: absolute;
    display: none;
    outline: none;
    border: none;
    cursor: pointer;
    left: -20px;
  }

  & .arrowRight {
    height: 100%;
    justify-content: center;
    background-color: ${colors.light};
    position: absolute;
    display: none;
    outline: none;
    border: none;
    cursor: pointer;
    right: -20px;
  }

  & .colorEdit {
    width: 100%;
    border-radius: 8px;
    justify-content: center;
    background-color: ${colors.shadowBlue};
    position: absolute;
    display: none;
    outline: none;
    border: none;
    cursor: pointer;
    bottom: -20px;
  }

  & .colorPanel {
    height: 24px;
    width: 24px;
    border-radius: 50%;
    cursor: pointer;

    ${({ color }) => css`
      background-color: ${color || colors.dark};
    `}
  }
`;

export const ChildContainer = styled.div`
  
`;
