import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import { Label } from '@components/Label';

describe('Label', () => {
    const children = "Hello, I'm Luiz";

    it('should render the component', () => {
        render(<Label>{children}</Label>)
        expect(screen.getByText(children)).toBeInTheDocument()
    })

    it('should render the component with a custom class', () => {
        render(<Label className={"delay-300"}>{children}</Label>)
        expect(screen.getByText(children)).toHaveClass("delay-300")
    })
});