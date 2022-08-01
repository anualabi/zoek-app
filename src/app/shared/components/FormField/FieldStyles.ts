import styled from 'styled-components';
import { PRIMARY_COLOR, SECONDARY_COLOR, SECONDARY_TEXT } from '../../utils/styles';

export const StyledLabel = styled.label`
  display: block;
  font-weight: 500;
  margin-bottom: 0.4rem;
`;

export const StyledInputGroup = styled.div`
  border: 2px solid ${PRIMARY_COLOR};
  color: ${SECONDARY_TEXT};
  display: flex;
  justiify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  height: 30px;
  width: 100%;
  transition: 0.2s;

  .start-icon {
    margin-right: 0.25rem;
  }

  .end-icon {
    margin-left: 0.25rem;
  }

  &:hover,
  &:focus-within {
    border-color: ${SECONDARY_COLOR};
  }

  input {
    border: none;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    font-size: 1.1rem;
    font-style: normal;
    font-weight: 500;
    line-height: 1.5;
    margin-right: auto;
    width: 100%;

    &::placeholder {
      color: ${SECONDARY_TEXT};
    }

    &:focus {
      outline: none;
    }
  }
`;
