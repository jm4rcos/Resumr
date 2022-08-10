import styled from "styled-components";
import { colors } from "../../themes/colors";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* margin-top: 90px; */

  height: 100%;
  width: 100%;
  background-color: ${colors.light};

  gap: 20px;

  @media (max-width: 768px) {
    background-color: ${colors.placeholder};
  }
`;
