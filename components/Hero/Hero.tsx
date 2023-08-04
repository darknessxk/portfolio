import { cva } from "class-variance-authority"
import { twMerge } from "tailwind-merge"
import {Section} from "@components/Section";
import {forwardRef} from "react";

const heroText = cva(
    [
        "flex",
        "flex-col"
    ],
    {
        variants: {},
        defaultVariants: {},
    }
)

const heroImage = cva(
    [
        "rounded-full",
        "border-4",
        "border-purple-500",
        "w-fit",
        "h-fit",
        "ml-32"
    ],
    {
        variants: {},
        defaultVariants: {},
    }
)

export interface HeroProps extends React.HTMLAttributes<HTMLDivElement> {
    image: string;
    imageAlt: string;
}

const Hero = forwardRef<HTMLDivElement, HeroProps>(({ image, imageAlt, children, ...props}, ref) => (
    <Section ref={ref} center {...props}>
        <div className={twMerge(heroText({  }))}>
            {children}
        </div>

        <div className={twMerge(heroImage({  }))}>
            <img
                className="shadow rounded-full max-h-64 align-middle border-none grayscale"
                src={image} alt={imageAlt} />
        </div>
    </Section>
))

export default Hero;