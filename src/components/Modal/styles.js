import styled, { css } from "styled-components";
import { colors } from "../../themes/colors"

export const Back = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  /* backdrop-filter: blur(6px); */
  top: -40px;

  display: flex;
  align-items: center;
  justify-content: center;

  animation: fade 0.6s;
  animation-fill-mode: forwards;

  @keyframes fade {
    0% {
      background-color: transparent;
      /* width: 0px;
      height: 0px; */
      backdrop-filter: blur(0px);
    }
    100% {
      background-color: rgba(0, 0, 0, 0.3);
      /* width: 100vw;
      height: 100vh; */
      backdrop-filter: blur(6px);
    }
  }
`;

export const Container = styled.div`
  /* ${({ width, height }) => css`
    width: ${width || "50%"};
    height: ${height || "60vh"};
  `} */
  /* height: 50px;
  width: 50px; */

  position: relative;
  background-color: ${colors.background};
  box-shadow: 0px 6px 14px 8px rgba(217, 217, 217, 0.74);

  border-radius: 10px;
  padding: 10px;

  animation: popup 0.3s;
  animation-fill-mode: forwards;

  @keyframes popup {
    0% {
      width: 50px;
      height: 50px;
    }
    100% {
      ${({ width, height }) => css`
        width: ${width || "50%"};
        height: ${height || "60vh"};
        display: block;
      `}
    }
  }
`;

export const ContentContainer = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
`;