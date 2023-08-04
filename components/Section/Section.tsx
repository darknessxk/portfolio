import { cva, type VariantProps } from "class-variance-authority"
import { twMerge } from "tailwind-merge"
import {forwardRef} from "react";

const section = cva(
    [
        "flex",
        "min-h-[80vh]",
        "h-fit-content",
    ],
    {
        variants: {
            center: { true: ["justify-center", "items-center", "px-48", "py-16"], false: [] },
        },
        defaultVariants: {
            center: false
        },
    }
)

export interface SectionProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof section> {
    center?: boolean
}

const Section = forwardRef<HTMLDivElement, SectionProps>(({className, center, children, ...props}, ref) =>
    <section ref={ref} className={twMerge(section({ className, center }))} {...props}>
        {children}
    </section>
)

export default Section
