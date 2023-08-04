import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import {HeroOnboard} from "./HeroOnboard";

describe('Hero', () => {
    const children = <div>Hello, I'm Luiz</div>;

    it('should render the component', () => {
        render(<HeroOnboard />)
        expect(screen.getByText('My name is')).toBeInTheDocument()
    })

    it('should render the image', () => {
        render(<HeroOnboard />)
        expect(screen.getByAltText('Luiz Felipe')).toBeInTheDocument()
    })
})
