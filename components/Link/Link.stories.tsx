import type { Meta, StoryObj } from "@storybook/react"
import { Link } from "@components/Link"

const meta: Meta<typeof Link> = {
    title: "Link",
    component: Link,
    args: {
        intent: "primary",
        underline: false,
        border: false,
        children: "Home",
    },
    argTypes: {
        intent: {
            options: ["primary"],
            control: { type: "select" },
        },
    },
}

type Story = StoryObj<typeof Link>

export const Default: Story = {
    render: (args) => <Link {...args} />,
}

export default meta
