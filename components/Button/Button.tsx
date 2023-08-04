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
                primary: ["text-gray-500", "dark:text-white", "font-semibold"],
            },
            size: {
                sm: ["w-20", "h-full", "text-sm"],
                lg: ["w-32", "h-full", "text-lg"],
            },
            spacing: {
                sm: ["py-1.5", "px-4"],
                lg: ["py-2.5", "px-6"],
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
    href: string
}

export function Button({ className, intent, spacing, size, underline, border, ...props }: ButtonProps) {
    return (
        <a className={twMerge(button({ intent, spacing, size, className, underline, border }))} {...props}>
            {props.children}
        </a>
    )
}
