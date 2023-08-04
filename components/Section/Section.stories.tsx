import type { Meta, StoryObj } from "@storybook/react"
import { Section } from "@components/Section"

const meta: Meta<typeof Section> = {
    title: "Section",
    component: Section,
    args: {
        center: false,
        children: <div className={"w-full h-full bg-gray-200"}>Section</div>,
    },
    argTypes: {},
}

type Story = StoryObj<typeof Section>

export const Default: Story = {
    render: (args) => <Section {...args} />,
}

export default meta
