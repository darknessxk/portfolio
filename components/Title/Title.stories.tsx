import type { Meta, StoryObj } from "@storybook/react"
import { Title } from "@components/Title"

const meta: Meta<typeof Title> = {
    title: "Title",
    component: Title,
    args: {
        intent: "primary",
        underline: false,
        bold: false,
        children: "Title",
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

type Story = StoryObj<typeof Title>

export const Default: Story = {
    render: (args) => <Title {...args} />,
}

export default meta
