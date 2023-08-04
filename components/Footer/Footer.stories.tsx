import type { Meta, StoryObj } from "@storybook/react"
import { Footer } from "@components/Footer"
import {Logo} from "@components/Logo";

const meta: Meta<typeof Footer> = {
    title: "Footer",
    component: Footer,
    args: {
        logo: <Logo />,
        source: "",
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
    argTypes: {},
}

type Story = StoryObj<typeof Footer>

export const Default: Story = {
    render: (args) => <Footer {...args} />,
}

export default meta
