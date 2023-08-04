import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import {Button} from "@components/Button";

describe('Button', () => {
    const text = "Click me";

    it('should render the button', () => {
        render(<Button href={"#"}>{text}</Button>)

        expect(screen.getByText(text)).toBeInTheDocument();
        expect(screen.getByText(text)).toHaveAttribute("href", "#");
    })

    it('should render the button with a custom class', () => {
        render(<Button href={"#"} className={"custom-class"}>{text}</Button>)

        expect(screen.getByText(text)).toBeInTheDocument();
        expect(screen.getByText(text)).toHaveClass("custom-class");
    });
})