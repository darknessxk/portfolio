import { cva, type VariantProps } from "class-variance-authority"

import { twMerge } from "tailwind-merge"

const label = cva(
    [
        "transition-colors",
        "delay-50",
    ],
    {
        variants: {
            intent: {
                primary: ["text-gray-500", "font-light"],
            },
            size: {
                sm: ["text-sm"],
                lg: ["text-base"],
            },
            underline: { true: ["underline"], false: [] },
            bold: { true: ["font-semibold"], false: [] },
        },
        defaultVariants: {
            intent: "primary",
            size: "lg",
        },
    }
)

export interface LabelProps extends React.HTMLAttributes<HTMLLabelElement>, VariantProps<typeof label> {
    underline?: boolean
    bold?: boolean
}

export function Label({ className, intent, size, underline, bold, ...props }: LabelProps) {
    return (
        <span className={twMerge(label({ intent, size, className, bold, underline }))} {...props}>
            {props.children}
        </span>
    )
}
