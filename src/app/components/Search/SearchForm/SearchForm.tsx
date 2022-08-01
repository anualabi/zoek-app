import { useEffect, useRef } from 'react';
import { Field } from '../../../shared/components/FormField/Field';
import { StyledSearchForm, StyledClearSearch } from './SearchFormStyles';

interface ISearch {
  searchQuery: string;
  handleSearchQuery: (e: string) => void;
  handleClearSearch: () => void;
}

const SearchForm = ({ searchQuery, handleSearchQuery, handleClearSearch }: ISearch) => {
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.focus();
    }
  }, []);

  return (
    <StyledSearchForm>
      <Field>
        <Field.Input
          type="text"
          name="zoeken"
          aria-label="Zoeken"
          placeholder="Zoeken"
          endIcon="search"
          value={searchQuery}
          onChange={(e) => handleSearchQuery(e.target.value)}
          ref={ref}
        />
        {searchQuery.length > 0 && (
          <StyledClearSearch
            type="button"
            data-testid="clear-search"
            className="material-icons close"
            onClick={handleClearSearch}
          >
            close
          </StyledClearSearch>
        )}
      </Field>
    </StyledSearchForm>
  );
};

export default SearchForm;
