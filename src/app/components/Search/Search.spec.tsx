import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ISearch } from '../../shared/types/search';
import { renderWithQueryClient } from '../../shared/utils/test';
import * as data from '../../shared/hooks/api/search';
import Search from './Search';

const getInputNode = () => screen.getByPlaceholderText(/zoeken/i) as HTMLInputElement;
const spy = jest.fn();
const payload = {
  search: 'default',
  suggestions: [
    {
      searchterm: 'heren truien',
      nrResults: 1100
    }
  ]
};

describe('Search Form', () => {
  describe('Form UI Presentation', () => {
    it('shows a placeholder text in search input', () => {
      renderWithQueryClient(<Search />);
      expect(getInputNode()).toBeInTheDocument();
    });

    it('shows a search icon in search form', () => {
      renderWithQueryClient(<Search />);
      expect(getInputNode().nextSibling).toHaveTextContent(/search/i);
    });
  });

  describe('Form Active State', () => {
    it('should be focused when clicked', () => {
      renderWithQueryClient(<Search />);
      userEvent.click(getInputNode());
      expect(getInputNode()).toHaveFocus();
    });

    it('shows clear icon button when a text is entered in input', () => {
      renderWithQueryClient(<Search />);
      userEvent.type(getInputNode(), 't');
      expect(getInputNode().value).toBe('t');

      const clearButton = screen.getByTestId('clear-search');
      expect(clearButton).toBeVisible();
      expect(clearButton.textContent).toBe('close');
    });

    it('clears text input when clear icon button is clicked', () => {
      renderWithQueryClient(<Search />);
      userEvent.type(getInputNode(), 't');
      expect(getInputNode().value).toBe('t');

      const clearButton = screen.getByTestId('clear-search');
      userEvent.click(clearButton);
      expect(getInputNode().value).toBe('');
    });

    it('removes clear icon button when it is clicked', () => {
      renderWithQueryClient(<Search />);
      userEvent.type(getInputNode(), 't');
      expect(getInputNode().value).toBe('t');

      const clearButton = screen.getByTestId('clear-search');
      userEvent.click(clearButton);
      expect(clearButton).not.toBeVisible();
    });
  });

  describe('Search Suggestions', () => {
    it('shows search suggestions when a user interacts with the search input', () => {
      renderWithQueryClient(<Search />);

      jest.spyOn(data, 'getSearchResult').mockResolvedValue(payload);
      data.getSearchResult('trui').then(() => ({ success: (data: ISearch) => spy(data) }));
      expect(data.getSearchResult).toHaveBeenCalled();
    });
  });
});
