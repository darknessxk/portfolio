import type { Meta, StoryObj } from "@storybook/react"
import { Project } from "@components/Project"
import CardImage from "@/images/card_image.png"

const meta: Meta<typeof Project> = {
    title: "Project",
    component: Project,
    args: {
        intent: "primary",
        title: "Portfolio",
        description: "Portfolio description",
        size: "lg",
        cardImageSrc: CardImage,
        cardImageAlt: "Image Alt",
        stack: ["Typescript", "Next.js", "TailwindCSS", "Storybook"],
        source: "",
        preview: ""
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

type Story = StoryObj<typeof Project>

export const Default: Story = {
    render: (args) => <Project {...args} />,
}

export default meta
