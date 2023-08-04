import { cva, type VariantProps } from "class-variance-authority"
import { twMerge } from "tailwind-merge"
import Image from "next/image";
import LogoImage from "@/images/logo.png";

const logo = cva(
    [],
    {
        variants: {
            size: {
                sm: [ "h-16", "w-16" ],
                md: [ "h-24", "w-24" ],
                lg: [ "min-w-32", "max-w-32" ],
            },
        },
        defaultVariants: {
            size: "sm",
        },
    }
)

export interface LogoProps extends React.HTMLAttributes<HTMLImageElement>, VariantProps<typeof logo> {
}

export function Logo({ className, size, ...props }: LogoProps) {
    return (
        <Image className={twMerge(logo({size, className}))} src={LogoImage} alt={"Luiz Felipe"} />
    )
}
