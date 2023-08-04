import { cva, type VariantProps } from "class-variance-authority"
import {Hero} from "@components/Hero";
import {Title} from "@components/Title";
import React from "react";
import usePageNavigation from "@context/PageNavigation.context";

const heroOnboard = cva(
    [
        "flex",
        "px-48",
        "py-16",
        "justify-between",
        "items-center",
        "bg-gray-100",
        "bg-opacity-50",
        "h-screen"
    ],
    {
        variants: {},
        defaultVariants: {},
    }
)

export interface HeroProps extends VariantProps<typeof heroOnboard> {
}

export function HeroOnboard({ ...props }: HeroProps) {
    const ref = React.useRef<HTMLDivElement | null>(null);
    const { setRef } = usePageNavigation();

    React.useEffect(() => {
        if (ref.current) {
            setRef("home", ref);
        }
    }, [ref.current])

    return (
        <Hero
            image={"https://media.licdn.com/dms/image/C4D03AQEiWPoZ0XT58A/profile-displayphoto-shrink_800_800/0/1575553503527?e=1696464000&v=beta&t=DCKM4aojY8yzMwViD_em2rIz1BrF0sLD-Oyx4GdKCHA"}
            imageAlt={"Luiz Felipe"}
            ref={ref}
        >
            <Title bold>Hi,</Title>
            <Title bold>My name is</Title>
            <Title bold className={"text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"}>Luiz Felipe</Title>
            <Title bold>I build things for</Title>
            <Title bold>A better future</Title>
        </Hero>
    )
}
