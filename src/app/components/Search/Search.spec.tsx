import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Search from './Search';

const getInputNode = () => screen.getByPlaceholderText(/zoeken/i) as HTMLInputElement;

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

    describe('Form Active State', () => {
        it('should be focused when clicked', () => {
            render(<Search />);
            userEvent.click(getInputNode());
            expect(getInputNode()).toHaveFocus();
        });

        it('shows clear icon button when a text is entered in input', () => {
            render(<Search />);
            userEvent.type(getInputNode(), 't');
            expect(getInputNode().value).toBe('t');

            const clearButton = screen.getByTestId('clear-search');
            expect(clearButton).toBeVisible();
            expect(clearButton.textContent).toBe('close');
        });

        it('clears text input when clear icon button is clicked', () => {
            render(<Search />);
            userEvent.type(getInputNode(), 't');
            expect(getInputNode().value).toBe('t');

            const clearButton = screen.getByTestId('clear-search');
            userEvent.click(clearButton);
            expect(getInputNode().value).toBe('');
        });

        it('removes clear icon button when it is clicked', () => {
            render(<Search />);
            userEvent.type(getInputNode(), 't');
            expect(getInputNode().value).toBe('t');

            const clearButton = screen.getByTestId('clear-search');
            userEvent.click(clearButton);
            expect(clearButton).not.toBeVisible();
        });
    });
})