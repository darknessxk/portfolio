import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import { Navbar } from '@components/Navbar';
import {FaGithub, FaLinkedin} from "react-icons/fa6";

describe('Navbar', () => {
    const items = [
        { href: "#", text: "Home" },
        { href: "#", text: "About" },
    ];

    const socials = [
        { href: "#", name: "Github", icon: <FaGithub /> },
        { href: "#", name: "LinkedIn", icon: <FaLinkedin /> },
    ];

    const Logo = <div>Logo</div>;

    it('should render the component', () => {
        render(<Navbar items={items} socials={socials} logo={Logo} />)
        expect(screen.getByText('Logo')).toBeInTheDocument()
    })

    it('should render the items', () => {
        render(<Navbar items={items} socials={socials} logo={Logo} />)
        expect(screen.getByText('Home')).toBeInTheDocument()
        expect(screen.getByText('About')).toBeInTheDocument()
    })
});