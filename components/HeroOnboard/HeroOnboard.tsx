import { cva, type VariantProps } from "class-variance-authority"
import React from "react";
import {Hero} from "@components/Hero";
import {Title} from "@components/Title";
import usePageNavigation from "@context/PageNavigation.context";
import Avatar from "@/images/avatar.jpg";

const heroOnboard = cva(
    [
        "flex",
        "px-48",
        "py-16",
        "justify-between",
        "items-center",
        "bg-gray-100",
        "h-screen"
    ],
    {
        variants: {},
        defaultVariants: {},
    }
)

export type HeroProps = VariantProps<typeof heroOnboard>

export function HeroOnboard() {
    const ref = React.useRef<HTMLDivElement | null>(null);
    const { setRef } = usePageNavigation();

    React.useEffect(() => {
        if (ref.current) {
            setRef("home", ref);
        }
    }, [ref, setRef])

    return (
        <Hero
            image={Avatar}
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
