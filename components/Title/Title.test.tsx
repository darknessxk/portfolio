import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import { Title } from '@components/Title';

describe('Title', () => {
    const children = "Testing";

    it('should render the component', () => {
        render(<Title>{children}</Title>)
        expect(screen.getByText(children)).toBeInTheDocument()
    })
})