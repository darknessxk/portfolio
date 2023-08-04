import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import { Project } from '@components/Project';

describe('Project', () => {
    const props = {
        title: "Portfolio",
        description: "Portfolio description",
        cardImageSrc: "https://v1.tailwindcss.com/img/card-top.jpg",
        cardImageAlt: "Image Alt",
        stack: ["Typescript", "Next.js", "TailwindCSS", "Storybook"],
        source: "#",
        preview: "#"
    };

    it('should render the component', () => {
        render(<Project {...props} />)
        expect(screen.getByText(props.title)).toBeInTheDocument()
        expect(screen.getByText(props.description)).toBeInTheDocument()
    })

    it('should render the image', () => {
        render(<Project {...props} />)
        expect(screen.getByAltText(props.cardImageAlt)).toBeInTheDocument()
    })

    it('should render the source link', () => {
        render(<Project {...props} />)
        expect(screen.getByText('View Source')).toBeInTheDocument()
    });

    it('should render the preview link', () => {
        render(<Project {...props} />)
        expect(screen.getByText('Live Preview')).toBeInTheDocument()
    })

    it('should render the stack', () => {
        render(<Project {...props} />)
        expect(screen.getByText('Typescript,')).toBeInTheDocument()
        expect(screen.getByText('Next.js,')).toBeInTheDocument()
        expect(screen.getByText('TailwindCSS,')).toBeInTheDocument()
        expect(screen.getByText('Storybook')).toBeInTheDocument()
    })
})