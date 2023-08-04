import { cva, type VariantProps } from "class-variance-authority"
import { twMerge } from "tailwind-merge"

const link = cva(
    [
        "justify-center",
        "inline-flex",
        "items-center",
        "rounded-xl",
        "text-center",
        "transition-colors",
        "delay-75",
        "h-full",
        "text-sm",
        "px-2"
    ],
    {
        variants: {
            intent: {
                primary: ["text-gray-500", "dark:text-white", "font-semibold"],
            },
            underline: { true: ["underline"], false: [] },
            border: { true: ["border-b-2", "rounded"], false: ["border-b-0"] },
        },
        defaultVariants: {
            intent: "primary",
        },
    }
)

export interface LinkProps extends React.HTMLAttributes<HTMLAnchorElement>, VariantProps<typeof link> {
    underline?: boolean
    border?: boolean
    href: string
}

export function Link({ className, intent, underline, border, ...props }: LinkProps) {
    return (
        <a className={twMerge(link({ intent, className, underline, border }))} {...props}>
            {props.children}
        </a>
    )
}
