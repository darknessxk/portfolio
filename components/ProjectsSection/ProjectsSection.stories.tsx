import type { Meta, StoryObj } from "@storybook/react"
import { ProjectsSection } from "@components/ProjectsSection"

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
                imageSrc: "https://v1.tailwindcss.com/img/card-top.jpg",
                stack: ["React", "TailwindCSS"],
            },
            {
                title: "Project 1",
                description: "Description 1",
                preview: "Preview 1",
                source: "Source 1",
                imageSrc: "https://v1.tailwindcss.com/img/card-top.jpg",
                stack: ["React", "TailwindCSS"],
            },
            {
                title: "Project 1",
                description: "Description 1",
                preview: "Preview 1",
                source: "Source 1",
                imageSrc: "https://v1.tailwindcss.com/img/card-top.jpg",
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
