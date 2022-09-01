import styled, { css } from "styled-components";
import { colors } from "../../../themes/colors";

export const Container = styled.div`
  background-color: ${colors.light};

  overflow: auto;

  ${(props) => css`
    grid-template-columns: ${props.col};
    grid-template-rows: ${props.row};
  `}

  row-gap: 1rem;
  column-gap: 1.5rem;

  padding: 30px 26px;

  max-width: 400px;
  height: 520px;
  width: 354px;

  border-radius: 10px;
  box-shadow: 0px 6px 14px 8px rgba(217, 217, 217, 0.74);

  /* margin-top: 5em; */

  @media (max-width: 1500px) {
    display: none;
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  position: relative;
  gap: 6px;
  padding-bottom: 20px;
`;

export const Side = styled.div`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  ${(props) =>
    css`
      align-items: ${props.align || "flex-start"};
      justify-content: ${props.justify || "flex-start"};
    `}

  height: 100%;
  width: 100%;
`;

export const Content = styled.div`

  height: 100%;
  width: 100%;
`;
