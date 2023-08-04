import type { Meta, StoryObj } from "@storybook/react"
import { LoadingSection } from "./LoadingSection"

const meta: Meta<typeof LoadingSection> = {
    title: "Loading Section",
    component: LoadingSection,
    args: {
    },
    argTypes: {},
}

type Story = StoryObj<typeof LoadingSection>

export const Default: Story = {
    render: (args) => <LoadingSection {...args} />,
}

export default meta
