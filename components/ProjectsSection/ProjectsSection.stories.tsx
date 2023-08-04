import type { Meta, StoryObj } from "@storybook/react"
import { ProjectsSection } from "@components/ProjectsSection"
import CardImage from "@/images/card_image.png"

const meta: Meta<typeof ProjectsSection> = {
    title: "Projects Section",
    component: ProjectsSection,
    args: {
        projects: [
            {
                title: "Project 1",
                description: "Description 1",
                preview: "Preview 1",
                source: "Source 1",
                imageSrc: CardImage,
                stack: ["React", "TailwindCSS"],
            },
            {
                title: "Project 1",
                description: "Description 1",
                preview: "Preview 1",
                source: "Source 1",
                imageSrc: CardImage,
                stack: ["React", "TailwindCSS"],
            },
            {
                title: "Project 1",
                description: "Description 1",
                preview: "Preview 1",
                source: "Source 1",
                imageSrc: CardImage,
                stack: ["React", "TailwindCSS"],
            }
        ],
    },
    argTypes: {},
}

type Story = StoryObj<typeof ProjectsSection>

export const Default: Story = {
    render: (args) => <ProjectsSection {...args} />,
}

export default meta
