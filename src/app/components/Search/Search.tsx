import { useState } from 'react';
import SearchForm from './SearchForm/SearchForm';
import { StyledSearch } from './SearchStyles';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <StyledSearch>
      <SearchForm
        searchQuery={searchTerm}
        handleSearchQuery={(e) => setSearchTerm(e)}
        handleClearSearch={() => setSearchTerm('')}
      />
    </StyledSearch>
  );
};

export default Search;
