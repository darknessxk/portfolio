import { cva, type VariantProps } from "class-variance-authority"
import { twMerge } from "tailwind-merge"

const button = cva(
    [
        "justify-center",
        "inline-flex",
        "items-center",
        "rounded-xl",
        "text-center",
        "transition-colors",
        "delay-75",
    ],
    {
        variants: {
            intent: {
                primary: ["text-gray-500", "font-semibold"],
            },
            size: {
                xs: ["w-8", "h-full", "text-sm"],
                sm: ["w-20", "h-full", "text-sm"],
                lg: ["w-32", "h-full", "text-sm"],
            },
            spacing: {
                sm: ["py-1.5", "px-2", "mx-1"],
                lg: ["py-2.5", "px-6", "mx-1"],
            },
            underline: { true: ["underline"], false: [] },
            border: { true: ["border-b-2", "rounded"], false: ["border-b-0"] },
        },
        defaultVariants: {
            intent: "primary",
            spacing: "lg",
            size: "lg",
        },
    }
)

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLAnchorElement>, VariantProps<typeof button> {
    underline?: boolean
    border?: boolean
    newTab?: boolean
    href: string
}

export function Button({ className, intent, spacing, size, underline, border, newTab, ...props }: ButtonProps) {
    return (
        <a
            className={twMerge(button({ intent, spacing, size, className, underline, border }))}
            target={newTab ? "_blank" : ""}
            {...props}>
            {props.children}
        </a>
    )
}
