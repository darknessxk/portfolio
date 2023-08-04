import { cva, type VariantProps } from "class-variance-authority"
import { twMerge } from "tailwind-merge"
import {forwardRef} from "react";

const tag = cva(
    [
        "inline-block",
        "rounded-full", "px-3", "py-1",
        "text-sm", "font-semibold",
        "mr-2", "mb-2", "cursor-pointer"
    ],
    {
        variants: {
            intent: {
                primary: ["bg-gray-200", "text-gray-700"],
            },
            size: {
                sm: [],
                lg: [],
            },
            selected: {
                true: ["bg-blue-500", "text-white"],
                false: []
            }
        },
        defaultVariants: {
            intent: "primary",
            size: "lg",
            selected: false,
        },
    }
)

export interface TagProps extends React.HTMLAttributes<HTMLSpanElement>, VariantProps<typeof tag> {
    name: string;
    selected?: boolean;
}

const Tag = forwardRef<HTMLSpanElement, TagProps>(
    ({ className, intent, size, name, selected, ...props }, ref) =>
        <span className={twMerge(tag({ intent, selected, className }))} {...props}>
            {name}
        </span>
)

export default Tag