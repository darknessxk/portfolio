import type { Meta, StoryObj } from "@storybook/react"
import CardImage from "@/images/card_image.png"
import { Card } from "@components/Card"

const meta: Meta<typeof Card> = {
    title: "Card",
    component: Card,
    args: {
        intent: "primary",
        children: "Label",
        size: "lg",
        cardImageSrc: CardImage,
        cardImageAlt: "Image Alt",
        tags: ["photography"],
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

type Story = StoryObj<typeof Card>

export const Default: Story = {
    render: (args) => <Card {...args} />,
}

export default meta
