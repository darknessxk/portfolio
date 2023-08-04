import { cva, type VariantProps } from "class-variance-authority"
import Image from "next/image";
import { twMerge } from "tailwind-merge"
import LogoImage from "@/images/logo.png";

const logo = cva(
    [],
    {
        variants: {
            size: {
                sm: [ "h-16", "w-16" ],
                md: [ "h-24", "w-24" ],
                lg: [ "w-32", "w-32" ],
            },
        },
        defaultVariants: {
            size: "sm",
        },
    }
)

export interface LogoProps extends VariantProps<typeof logo> {
    className?: string
}

export function Logo({ className, size }: LogoProps) {
    return (
        <Image className={twMerge(logo({size, className}))} src={LogoImage} alt={"Luiz Felipe"} />
    )
}
