import styled from 'styled-components';
import { colors } from '../../themes/colors';

export const Container = styled.div`
  background-color: transparent !important;
  display: flex;
  align-items: center;
  justify-content: space-between ;
  
  height: 5em;
  width: 100%;
  position: absolute;
  top: 0;
  z-index: 10;

  > * {
    padding: 20px 30px;
  }
`;

export const Logo = styled.h2`
    font-weight: 500;
`;