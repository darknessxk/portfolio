import { cva, type VariantProps } from "class-variance-authority"
import { twMerge } from "tailwind-merge"
import {Tag} from "../Tag/Tag";

const cardContainer = cva(
    [
        "max-w-sm",
        "rounded-lg",
        "overflow-hidden",
        "shadow-lg",
        "bg-white"
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

const cardContent = cva(
    [
        "px-6", "py-4"
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

const cardImage = cva(
    [
        "w-full"
    ],
    {
        variants: {
            intent: {
                primary: [],
            },
            imgSize: {
                md: [ "w-42", "h-42", "min-w-42", "min-h-42", "max-w-42", "max-h-42" ],
                lg: [ "w-full", "h-full" ],
            },
        },
        defaultVariants: {
            intent: "primary",
            imgSize: "lg",
        },
    }
)

export interface CardProps extends
    React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardContainer>,
    VariantProps<typeof cardContent>,
    VariantProps<typeof cardImage> {
    cardImageSrc: string;
    cardImageAlt: string;
    tags?: string[];
}

export function Card({ intent, size, cardImageSrc, cardImageAlt, tags, className, imgSize, ...props }: CardProps) {
    return (
        <div className={twMerge(cardContainer({ intent, className }))}>
            <img className={twMerge(cardImage({ intent, imgSize }))} src={cardImageSrc} alt={cardImageAlt} />
            <div className={twMerge(cardContent({ intent }))}>
                {props.children}
            </div>
            {
                tags && <div className="px-6 pt-4 pb-2">
                    {tags.map((tag, index) =>
                        <Tag name={index !== tags.length - 1 ? `${tag},` : tag} />
                    )}
                </div>
            }
        </div>
    )
}
