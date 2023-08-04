import type { Meta, StoryObj } from "@storybook/react"
import { HeroOnboard } from "@components/HeroOnboard"

const meta: Meta<typeof HeroOnboard> = {
    title: "Hero OnBoarding",
    component: HeroOnboard,
    args: {
    },
    argTypes: {
    },
}

type Story = StoryObj<typeof HeroOnboard>

export const Default: Story = {
    render: (args) => <HeroOnboard {...args} />,
}

export default meta
