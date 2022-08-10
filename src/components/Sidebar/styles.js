import styled from 'styled-components';
import { colors } from '../../themes/colors';

export const Container = styled.div`
  overflow: hidden;
  background-color: ${colors.light};
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  /* padding: 0; */

  height: 100%;
  max-width: 400px;
  width: 400px;

  padding-top: 5em !important;

  z-index: 5;
  @media (max-width: 768px) {
    width: 100% !important;
    max-width: 100%;
  }
`;

export const Logo = styled.h2`
    font-weight: 500;
`;