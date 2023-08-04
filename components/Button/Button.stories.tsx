import type { Meta, StoryObj } from "@storybook/react"
import { Button } from "@components/Button"

const meta: Meta<typeof Button> = {
    title: "Button",
    component: Button,
    args: {
        intent: "primary",
        underline: false,
        border: false,
        children: "Home",
        size: "lg",
        spacing: "lg"
    },
    argTypes: {
        intent: {
            options: ["primary"],
            control: { type: "select" },
        },
        size: {
            options: ["sm", "lg"],
            control: { type: "select" },
        },
        spacing: {
            options: ["sm", "lg"],
            control: { type: "select" },
        }
    },
}

type Story = StoryObj<typeof Button>

export const Default: Story = {
    render: (args) => <Button {...args} />,
}

export default meta
