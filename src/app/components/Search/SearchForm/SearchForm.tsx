import { Field } from '../../../shared/components/FormField/Field';
import { StyledSearchForm } from './SearchFormStyles';

interface ISearch {
  searchQuery: string;
  handleSearchQuery: (e: string) => void;
  handleClearSearch: () => void;
}

const SearchForm = ({ searchQuery, handleSearchQuery, handleClearSearch }: ISearch) => {
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
        />
      </Field>
    </StyledSearchForm>
  );
};

export default SearchForm;
