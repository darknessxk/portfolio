import { cva, type VariantProps } from "class-variance-authority"
import Image, {StaticImageData} from "next/image";
import { twMerge } from "tailwind-merge"
import { Tag } from "@components/Tag";

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
                md: [ "w-48", "h-48" ],
                lg: [ "w-full", "h-fit" ],
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
    cardImageSrc: string | StaticImageData;
    cardImageAlt: string;
    tags?: string[];
}

export function Card({ intent, cardImageSrc, cardImageAlt, tags, className, imgSize, ...props }: CardProps) {
    return (
        <div className={twMerge(cardContainer({ intent, className }))}>
            <Image className={twMerge(cardImage({ intent, imgSize }))}
                   src={cardImageSrc} alt={cardImageAlt}
                   width={192} height={192} />
            <div className={twMerge(cardContent({ intent }))}>
                {props.children}
            </div>
            {
                tags && <div className="px-6 pt-4 pb-2">
                    {tags.map((tag, index) =>
                        <Tag key={index} name={index !== tags.length - 1 ? `${tag},` : tag} />
                    )}
                </div>
            }
        </div>
    )
}
