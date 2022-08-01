import { useState } from 'react';
import SearchForm from './SearchForm/SearchForm';
import SearchResult from './SearchResult/SearchResult';
import { useSearchQuery } from '../../shared/hooks/search';
import { StyledSearch, StyledResult } from './SearchStyles';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { isLoading, isError, data } = useSearchQuery(searchTerm);

  const searchResult = isLoading ? (
    <p className="loading">Loading...</p>
  ) : isError ? (
    <p className="error">Error! Unable to display search results.</p>
  ) : !data?.suggestions ? (
    <p className="not-found">No results found.</p>
  ) : (
    <SearchResult suggestions={data.suggestions} query={searchTerm} />
  );

  return (
    <StyledSearch>
      <SearchForm
        searchQuery={searchTerm}
        handleSearchQuery={(e) => setSearchTerm(e)}
        handleClearSearch={() => setSearchTerm('')}
      />
      {searchTerm.length > 1 && <StyledResult>{searchResult}</StyledResult>}
    </StyledSearch>
  );
};

export default Search;
