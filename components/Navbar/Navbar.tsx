import { cva, type VariantProps } from "class-variance-authority"
import { twMerge } from "tailwind-merge"
import {Button} from "@components/Button";
import {INavItem} from "@interfaces/INavItem.interface";
import {ISocial} from "@interfaces/ISocial.interface";
import {GetIconFromStringHelper} from "@helpers/GetIconFromString.helper";
import usePageNavigation from "@context/PageNavigation.context";

const navbar = cva(
    [
        "sticky", "top-0", "z-50",
    ],
    {
        variants: {
            intent: {
                primary: ["bg-white", "border-gray-200", "dark:bg-gray-900"],
            },
        },
        defaultVariants: {
            intent: "primary",
        },
    }
)

const navbarContainer = cva(
    [
        "flex", "flex-wrap", "items-center",
        "max-w-screen-xl", "justify-between",
        "mx-auto", "p-4", "px-32"
    ],
    {
        variants: {
            intent: {},
        },
        defaultVariants: {},
    }
)


export interface NavbarProps extends VariantProps<typeof navbar> {
    logo: React.ReactNode;
    items: Array<INavItem>
    socials: Array<ISocial>
}

export function Navbar({ items, socials, logo, intent, ...props }: NavbarProps) {
    const { getRef } = usePageNavigation();

    return (
        <nav className={twMerge(navbar({ intent, }))} {...props}>
            <div className={twMerge(navbarContainer({}))}>
                <div>
                    {logo}
                </div>
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

                    {
                        socials.map(
                            ({href, icon}, index) => {
                                const Icon = GetIconFromStringHelper(icon)
                                if (Icon === null || Icon === undefined) return null
                                return <Button key={index} spacing={"sm"} href={href}><Icon /></Button>
                            }
                        )
                    }
                </div>
            </div>
        </nav>
    )
}
