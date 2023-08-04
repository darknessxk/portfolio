import { cva } from "class-variance-authority"
import {forwardRef} from "react";
import { twMerge } from "tailwind-merge"
import {Label} from "@components/Label";
import {Section} from "@components/Section";
import {Title} from "@components/Title";

const projectsContainer = cva(
    [
        "flex-col",
    ],
    {
        variants: {},
        defaultVariants: {},
    }
)

export interface ProjectsSectionProps extends React.HTMLAttributes<HTMLDivElement> {
    title: string;
    description: string;
}

const ContentSection = forwardRef<HTMLDivElement, ProjectsSectionProps>(
    ({ title, description, children }, ref) =>
        (
            <Section className={twMerge(projectsContainer())} ref={ref}>
                <div className={"flex flex-col justify-center items-center"}>
                    <Title>{title}</Title>
                    <Label className={"my-6"}>{description}</Label>
                </div>

                {children}
            </Section>
        )
)

ContentSection.displayName = "ContentSection"

export default ContentSection
