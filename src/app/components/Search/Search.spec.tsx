import { screen, render } from '@testing-library/react';
import Search from './Search';

const getInputNode = () => screen.getByPlaceholderText(/zoeken/i);

describe('Search Form', () => {
    describe('Form UI Presentation', () => {
        it('shows a placeholder text in search input', () => {
            render(<Search />);
            expect(getInputNode()).toBeInTheDocument();
        });

        it('shows a search icon in search form', () => {
            render(<Search />);
            expect(getInputNode().nextSibling).toHaveTextContent(/search/i);
        });
    });
})