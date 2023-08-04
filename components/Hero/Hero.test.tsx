import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import { Hero } from '@components/Hero';

describe('Hero', () => {
    const children = <div>Hello</div>;

    it('should render the component', () => {
        render(<Hero image={""} imageAlt={"hero image"}>{children}</Hero>)
        expect(screen.getByText('Hello')).toBeInTheDocument()
    })

    it('should render the image', () => {
        render(<Hero image={"https://via.placeholder.com/64"} imageAlt={"hero image"}>{children}</Hero>)
        expect(screen.getByAltText('hero image')).toBeInTheDocument()
    })
})
