import type { Meta, StoryObj } from "@storybook/react"
import { ContentSection } from "./ContentSection"

const meta: Meta<typeof ContentSection> = {
    title: "Content Section",
    component: ContentSection,
    args: {
        title: "Title",
        description: "Description",
        children: <div>Children</div>,
    },
    argTypes: {},
}

type Story = StoryObj<typeof ContentSection>

export const Default: Story = {
    render: (args) => <ContentSection {...args} />,
}

export default meta
