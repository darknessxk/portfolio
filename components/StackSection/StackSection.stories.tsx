import type { Meta, StoryObj } from "@storybook/react"
import { StackSection } from "@components/StackSection"

const meta: Meta<typeof StackSection> = {
    title: "Stack Section",
    component: StackSection,
    args: {
        stack: [
            {
                Name: "HTML5",
                Tags: ["Language", "Web"],
                Item: "SiHtml5",
                Class: "text-red-500"
            },
            {
                Name: "PHP",
                Tags: ["Language", "Web", "Featured"],
                Item: "SiPhp",
                Class: "text-blue-500"
            },
            {
                Name: "C++",
                Tags: ["Language", "Desktop", "Mobile", "Embedded", "Web", "Featured"],
                Item: "SiCplusplus",
                Class: "text-gray-800"
            },
            {
                Name: "AWS",
                Tags: ["Cloud", "Featured"],
                Item: "SiAmazonaws",
                Class: "text-yellow-500"
            },
            {
                Name: "Google Cloud",
                Tags: ["Cloud"],
                Item: "SiGooglecloud",
                Class: ""
            },
            {
                Name: "Postgres",
                Tags: ["Database", "Featured"],
                Item: "SiPostgresql",
                Class: "text-blue-300"
            },
            {
                Name: "Apache Kafka",
                Tags: ["Message"],
                Item: "SiApachekafka",
                Class: "text-gray-800"
            },
            {
                Name: "Kubernetes",
                Tags: ["Cloud", "Container", "Orchestration", "CD", "Featured"],
                Item: "SiKubernetes",
                Class: "text-blue-800"
            }
        ],
    },
    argTypes: {},
}

type Story = StoryObj<typeof StackSection>

export const Default: Story = {
    render: (args) => <StackSection {...args} />,
}

export default meta
