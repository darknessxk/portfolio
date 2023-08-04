import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import { Footer } from '@components/Footer';
import {FaGithub, FaLinkedin} from "react-icons/fa6";

describe('Footer', () => {
    const items = [
        { href: "#", text: "Home" },
        { href: "#", text: "About" },
    ];

    const socials = [
        { href: "#", name: "Github", icon: <FaGithub /> },
        { href: "#", name: "LinkedIn", icon: <FaLinkedin /> },
    ];

    const source = "#";

    const Logo = <div>Logo</div>;


    it('should render the component', () => {
        render(<Footer items={items} socials={socials} source={source} logo={Logo} />)
        expect(screen.getByText('Logo')).toBeInTheDocument()
    })

    it('should render the logo', () => {
        render(<Footer items={items} socials={socials} source={source} logo={Logo} />)
        expect(screen.getByText('Logo')).toBeInTheDocument()
    })
});