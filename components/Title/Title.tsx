import { cva, type VariantProps } from "class-variance-authority"
import { twMerge } from "tailwind-merge"

const title = cva(
    [
        "rounded-xl",
        "transition-colors",
        "delay-50",
        "font-light",
    ],
    {
        variants: {
            intent: {
                primary: ["text-gray-500", "dark:text-white"],
            },
            size: {
                sm: ["text-2xl"],
                lg: ["text-6xl"],
            },
            underline: { true: ["underline"], false: [] },
            bold: { true: ["font-bold"], false: [] }
        },
        defaultVariants: {
            intent: "primary",
            size: "lg",
        },
    }
)

export interface TitleProps extends React.HTMLAttributes<HTMLHeadingElement>, VariantProps<typeof title> {
    underline?: boolean
    bold?: boolean
}

export function Title({ className, intent, size, underline, bold, ...props }: TitleProps) {
    return (
        <h1 className={twMerge(title({ intent, size, className, underline, bold }))} {...props}>
            {props.children}
        </h1>
    )
}
