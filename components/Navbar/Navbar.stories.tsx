import type { Meta, StoryObj } from "@storybook/react"
import {Logo} from "@components/Logo";
import { Navbar } from "@components/Navbar"

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
