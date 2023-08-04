import type { Meta, StoryObj } from "@storybook/react"
import { Navbar } from "@components/Navbar"
import {Logo} from "@components/Logo";

const meta: Meta<typeof Navbar> = {
    title: "Navbar",
    component: Navbar,
    args: {
        intent: "primary",
        logo: <Logo />,
        items: [
            { href: "#", text: "Home" },
            { href: "#", text: "About" },
            { href: "#", text: "Tech Stack" },
            { href: "#", text: "Projects" },
            { href: "#", text: "Contact" },
        ],
        socials: [
            { href: "#", icon: "FaGithub" },
            { href: "#", icon: "FaLinkedin" },
            { href: "#", icon: "FaTwitter" },
        ],
    },
    argTypes: {
        intent: {
            options: ["primary"],
            control: { type: "select" },
        },
    },
}

type Story = StoryObj<typeof Navbar>

export const Default: Story = {
    render: (args) => <Navbar {...args} />,
}

export default meta
