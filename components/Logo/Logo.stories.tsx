import type { Meta, StoryObj } from "@storybook/react"
import {Logo} from "@components/Logo";

const meta: Meta<typeof Logo> = {
    title: "Logo",
    component: Logo,
    args: {
        size: "lg",
    },
    argTypes: {
        size: {
            options: ["sm", "lg"],
            control: { type: "select" },
        },
    },
}

type Story = StoryObj<typeof Logo>

export const Default: Story = {
    render: (args) => <Logo {...args} />,
}

export default meta
