import { cva, type VariantProps } from "class-variance-authority"
import { twMerge } from "tailwind-merge"
import {Section} from "@components/Section";
import {Title} from "@components/Title";
import {Label} from "@components/Label";
import {forwardRef} from "react";

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
    ({ title, description, children, ...props }, ref) =>
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

export default ContentSection
