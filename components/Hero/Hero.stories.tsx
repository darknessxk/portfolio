import type { Meta, StoryObj } from "@storybook/react"
import { Hero } from "@components/Hero"

const meta: Meta<typeof Hero> = {
    title: "Hero",
    component: Hero,
    args: {
        children: <>Storybook</>,
        image: "https://avatars.githubusercontent.com/u/22632046?s=280&v=4",
        imageAlt: "Storybook"
    },
    argTypes: {
    },
}

type Story = StoryObj<typeof Hero>

export const Default: Story = {
    render: (args) => <Hero {...args} />,
}

export default meta
