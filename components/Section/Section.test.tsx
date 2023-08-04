import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import { Section } from '@components/Section';

describe("Section", () => {
    const children = <div>Hello World</div>;

    it("should render the component", () => {
        render(<Section>{children}</Section>)
        expect(screen.getByText("Hello World")).toBeInTheDocument()
    })
})