import { cva, type VariantProps } from "class-variance-authority"
import React from "react";
import {FaGithub} from "react-icons/fa6";
import { twMerge } from "tailwind-merge"
import {Button} from "@components/Button";
import {Label} from "@components/Label";
import usePageNavigation from "@context/PageNavigation.context";
import {GetIconFromStringHelper} from "@helpers/GetIconFromString.helper";
import {INavItem} from "@interfaces/INavItem.interface";
import {ISocial} from "@interfaces/ISocial.interface";

const footer = cva(
    [
        "flex",
        "flex-col",
        "h-[30vh]",
        "py-2",
        "px-48"
    ],
    {
        variants: {},
        defaultVariants: {},
    }
)

const footerContainer = cva(
    [
        "flex", "flex-wrap", "items-center",
        "max-w-screen-xl", "justify-between",
        "py-8"
    ],
)

export interface FooterProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof footer> {
    logo: React.ReactNode;
    items: Array<INavItem>
    socials: Array<ISocial>
    source: string;
}

export function Footer({ className, items, socials, logo, source, ...props }: FooterProps) {
    const ref = React.useRef<HTMLDivElement | null>(null);
    const { setRef, getRef } = usePageNavigation();

    React.useEffect(() => {
        if (ref.current) {
            setRef("contact", ref);
        }
    }, [ref, setRef])

    return (
        <footer ref={ref} className={twMerge(footer({ className }))} {...props}>
            <div className={twMerge(footerContainer({}))}>
                <div>
                    {logo}
                </div>
                <div className={twMerge(footerContainer({}))}>
                    <Label className={"px-4"}>+55 11 93618 2308</Label>
                    <Label className={"px-4"}>luiz.felipe.techq@gmail.com</Label>

                    {
                        socials.map(
                            ({href, icon}, index) => {
                                const Icon = GetIconFromStringHelper(icon)
                                if (Icon === null || Icon === undefined) return null
                                return <Button newTab key={index} size={"xs"} spacing={"sm"} href={href}><Icon /></Button>
                            }
                        )
                    }
                </div>
            </div>

            <hr />

            <div className={twMerge(footerContainer({}))}>
                <div>
                    {
                        items.map(
                            ({text, href}, index) =>
                                <Button key={index} href={href} onClick={(e) => {
                                    const ref = getRef(href)
                                    if (ref) {
                                        ref.current?.scrollIntoView({ behavior: "smooth", block: "start" })
                                    }
                                    e.preventDefault()
                                }}>{text}</Button>
                        )
                    }
                </div>

                <div>
                    <Label>Designed and built by Luiz Felipe with</Label> <Label className={"text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"}>Next.js and Tailwind CSS</Label> <Button href={source}><FaGithub /></Button>
                </div>
            </div>
        </footer>
    )
}
