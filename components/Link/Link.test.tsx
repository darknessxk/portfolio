import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import { Link } from '@components/Link';

describe('Link', () => {
    it('should render the component', () => {
        render(<Link href={"https://www.google.com"}>Google</Link>)
        expect(screen.getByText('Google')).toBeInTheDocument()
    });

    it('should render the component with a custom class', () => {
        render(<Link href={"https://www.google.com"} className={"delay-300"}>Google</Link>)
        expect(screen.getByText('Google')).toHaveClass("delay-300")
    });
});
