import styled, { css } from 'styled-components';
import { colors } from '../../themes/colors';

export const Container = styled.div`
  position: relative;
  border-radius: 5px;
  padding: 0;

  ${({v, h}) => css`
    margin-top: ${v}px;
    margin-left: ${h}px;
  `}

  transition: .25s ease-in-out;

  :hover {
    background-color: ${colors.border};
    cursor: pointer;

    & .arrowUp,
    .arrowDown,
    .arrowLeft,
    .arrowRight {
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0.5;
    }
  }

  & .arrowUp {
    width: 100%;
    justify-content: center;
    background-color: ${colors.light};
    position: absolute;
    display: none;
    outline: none;
    border: none;
    cursor: pointer;
    top: -20px;
  }

  & .arrowDown {
    width: 100%;
    justify-content: center;
    background-color: ${colors.light};
    position: absolute;
    display: none;
    outline: none;
    border: none;
    cursor: pointer;
    bottom: -20px;
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
`;

export const ChildContainer = styled.div`
  
`;
