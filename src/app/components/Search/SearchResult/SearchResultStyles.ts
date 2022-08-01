import styled from 'styled-components';
import { PRIMARY_COLOR, HIGHLIGHT_TEXT } from '../../../shared/utils/styles';

export const StyledSearchResult = styled.div`
  ul {
    padding: 0;
    margin: 0;

    li {
      list-style: none;
      border-bottom: 1px solid ${PRIMARY_COLOR};
      padding: 0.75rem;

      .highlight {
        background-color: transparent;
        color: ${HIGHLIGHT_TEXT};
      }

      .result-count {
        color: ${HIGHLIGHT_TEXT};
        margin-left: 0.5rem;
      }

      &:last-child {
        border-bottom: 0;
      }
    }
  }
`;
