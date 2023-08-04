import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import {Card} from "@components/Card";

describe('Card', () => {
    it('should render the card', () => {
        const text = "Test Card";
        render(<Card cardImageAlt={""} cardImageSrc={"https://via.placeholder.com/64"}>{text}</Card>)

        expect(screen.getByText(text)).toBeInTheDocument();
    })

    it('should render the card with an image', () => {
        const text = "Test Card";
        const imageSrc = "https://via.placeholder.com/64";
        render(<Card cardImageAlt={text} cardImageSrc={imageSrc}>{text}</Card>)

        expect(screen.getByText(text)).toBeInTheDocument();
        expect(screen.getByAltText(text)).toBeInTheDocument();
        expect(screen.getByAltText(text)).toHaveAttribute("src", imageSrc);
    })

    it('should render the card with tags', () => {
        const text = "Test Card";
        render(<Card cardImageAlt={text} cardImageSrc={"https://via.placeholder.com/64"} tags={[ "tags test" ]} >{text}</Card>)

        expect(screen.getByText(text)).toBeInTheDocument();
        expect(screen.getByText("tags test")).toBeInTheDocument();
    })
})