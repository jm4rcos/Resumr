import styled, { css } from "styled-components";
import { colors } from "../../../themes/colors";

export const Container = styled.div`
    display: grid;
    place-items: center;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-column-gap: 2em;
    grid-row-gap: 2em;
    padding: 40px;

    height: 100%;
    
    overflow: auto;

    position: relative;
`;

export const ImageContainer = styled.div`
  height: 300px;
  overflow: hidden;
  border-radius: 10px;
  margin-bottom: 16px;
  transition: 0.3s;

  :hover {
    overflow: visible;
    transform: scale(1.15);
  }
`;