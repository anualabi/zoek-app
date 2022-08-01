import styled from 'styled-components';

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
