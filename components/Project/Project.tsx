import { cva, type VariantProps } from "class-variance-authority"

import {FaGithub} from "react-icons/fa6";
import {GoLink} from "react-icons/go";
import { twMerge } from "tailwind-merge"
import {Card} from "@components/Card";
import {Label} from "@components/Label";
import {Link} from "@components/Link";
import {StaticImageData} from "next/image";

const cardTitle = cva(
    [
        "font-bold", "text-xl", "mb-2"
    ],
    {
        variants: {
            intent: {
                primary: ["text-gray-900"],
            },
            size: {
                sm: [],
                lg: [],
            },
        },
        defaultVariants: {
            intent: "primary",
            size: "lg",
        },
    }
)

const cardDescription = cva(
    [
        "text-sm"
    ],
    {
        variants: {
            intent: {
                primary: ["text-gray-500"],
            },
            size: {
                sm: [],
                lg: [],
            },
        },
        defaultVariants: {
            intent: "primary",
            size: "lg",
        },
    }
)

const cardStack = cva(
    [
        "text-sm", "py-2"
    ],
    {
        variants: {
            intent: {
                primary: ["text-gray-500"],
            },
            size: {
                sm: [],
                lg: [],
            },
        },
        defaultVariants: {
            intent: "primary",
            size: "lg",
        },
    }
)

const cardBottom = cva(
    [
        "flex", "justify-between", "items-center",
        "py-2"
    ],
    {
        variants: {
            intent: {
                primary: [],
            },
            size: {
                sm: [],
                lg: [],
            },
        },
        defaultVariants: {
            intent: "primary",
            size: "lg",
        },
    }
)

export interface ProjectProps extends
    React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardTitle>,
    VariantProps<typeof cardDescription> {
    cardImageSrc: string | StaticImageData;
    cardImageAlt: string;
    className?: string;
    title: string;
    description: string;
    stack: string[];
    preview?: string;
    source?: string;
}

export function Project({ title, className, description, intent, size, cardImageSrc, cardImageAlt, stack, source, preview }: ProjectProps) {
    return (
        <Card className={twMerge(className, "mx-3", "my-4")} cardImageSrc={cardImageSrc} cardImageAlt={cardImageAlt} size={size}>
            <div className={twMerge(cardTitle({ intent }))}>{title}</div>
            <div className={twMerge(cardDescription({ intent }))}>
                {description}
            </div>
            <div className={twMerge(cardStack({ intent }))}>
                <Label bold>Tech Stack:</Label>
                <div className={"h-full grid grid-cols-3"}>
                    {stack.map((tech, index) =>
                        <Label key={index} className={"pl-[0.15rem] text-xs"}>
                            {index !== stack.length - 1 ? `${tech},` : tech}
                        </Label>)
                    }
                </div>
            </div>
            <div className={twMerge(cardBottom({ }))} >
                {preview && <div className={"flex items-center"}>
                    <GoLink />
                    <Link underline href={preview}>
                        Live Preview
                    </Link>
                </div>}
                {source && <div className={"flex items-center"}>
                    <FaGithub />
                    <Link underline href={source}>
                        View Source
                    </Link>
                </div>}
            </div>
        </Card>
    )
}
