import Highlighter from 'react-highlight-words';
import { ISuggestions } from '../../../shared/types/search';
import { StyledSearchResult } from './SearchResultStyles';

type ISearchResult = {
  suggestions: ISuggestions[];
  query: string;
};

const SearchResult = (props: ISearchResult) => {
  const matches = props.suggestions
    .filter(({ searchterm }) => searchterm.toLowerCase().includes(props.query.toLowerCase()))
    .map((suggestion, index) => (
      <li key={suggestion.searchterm} data-testid="result" tabIndex={0}>
        <Highlighter
          highlightClassName="highlight"
          searchWords={[props.query]}
          textToHighlight={suggestion.searchterm}
        />
        <span className="result-count">({suggestion.nrResults})</span>
      </li>
    ));

  let result: React.ReactNode;
  if (matches.length === 0) {
    result = <p className="not-found">No match found</p>;
  }
  if (matches.length > 0) {
    result = <ul>{matches}</ul>;
  }

  return <StyledSearchResult>{result}</StyledSearchResult>;
};

export default SearchResult;
