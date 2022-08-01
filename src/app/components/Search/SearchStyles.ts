import styled from 'styled-components';
import { PRIMARY_COLOR } from '../../shared/utils/styles';

export const StyledSearch = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem 0.5rem;
  max-width: 360px;
  width: 100%;

  @media (min-width: 768px) {
    max-width: 460px;
  }
`;

export const StyledResult = styled.div`
  border: 1px solid ${PRIMARY_COLOR};
  box-sizing: border-box;
  margin-top: -1px;
  width: 100%;
`;
