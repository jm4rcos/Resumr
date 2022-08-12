import styled from 'styled-components';
import { colors } from '../../themes/colors';

export const Container = styled.div`
  background-color: ${colors.background};
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 5em;

  height: 100vh;
  width: 100%;

  padding: 0em 30px;

  overflow: "hidden";
  

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Logo = styled.h2`
    font-weight: 500;
`;