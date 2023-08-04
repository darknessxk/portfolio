import type { Meta, StoryObj } from "@storybook/react"
import { Tag } from "@components/Tag"

const meta: Meta<typeof Tag> = {
    title: "Tag",
    component: Tag,
    args: {
        intent: "primary",
        name: "Photography",
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

type Story = StoryObj<typeof Tag>

export const Default: Story = {
    render: (args) => <Tag {...args} />,
}

export default meta
