import { cva } from "class-variance-authority"
import Image, {StaticImageData} from "next/image";
import {forwardRef} from "react";
import { twMerge } from "tailwind-merge"
import {Section} from "@components/Section";

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
    image: string | StaticImageData;
    imageAlt: string;
}

const Hero = forwardRef<HTMLDivElement, HeroProps>(({ image, imageAlt, children, ...props}, ref) => (
    <Section ref={ref} center {...props}>
        <div className={twMerge(heroText({  }))}>
            {children}
        </div>

        <div className={twMerge(heroImage({  }))}>
            <Image
                className="shadow rounded-full max-h-64 align-middle border-none grayscale"
                src={image} alt={imageAlt}
                width={192} height={192}
            />
        </div>
    </Section>
))

Hero.displayName = "Hero";

export default Hero;