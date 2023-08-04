import type { Meta, StoryObj } from "@storybook/react"
import { Label } from "@components/Label"

const meta: Meta<typeof Label> = {
    title: "Label",
    component: Label,
    args: {
        intent: "primary",
        underline: false,
        children: "Label",
        size: "lg",
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
    },
}

type Story = StoryObj<typeof Label>

export const Default: Story = {
    render: (args) => <Label {...args} />,
}

export default meta
