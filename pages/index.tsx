import Head from "next/head"
import {Navbar} from "@components/Navbar";
import {HeroOnboard} from "@components/HeroOnboard";
import {StackSection} from "@components/StackSection";
import {ProjectsSection} from "@components/ProjectsSection";
import {Footer} from "@components/Footer";
import {Logo} from "@components/Logo";
import {IAIOApiInterface} from "@interfaces/IAIOApi.interface";
import {useQuery} from "react-query";
import {LoadingSection} from "@components/LoadingSection";
import {INavItem} from "@interfaces/INavItem.interface";


export default function Index() {
    const aioApi = useQuery<IAIOApiInterface>({
        queryKey: "aioApi",
        queryFn: async () => {
            const res = await fetch("/api/aio");
            return await res.json() as IAIOApiInterface;
        },
        cacheTime: 1000 * 60 * 60 * 8,
    })

    const items: Array<INavItem> = [
        { href: "home", text: "Home" },
        { href: "stack", text: "Tech Stack" },
        { href: "projects", text: "Projects" },
        { href: "contact", text: "Contact" },
    ]

    if (aioApi.isLoading) return <LoadingSection />
    if (aioApi.error) return <LoadingSection>Error</LoadingSection>
    if (!aioApi.data) return <LoadingSection>No content</LoadingSection>

    const { data: { socials, stack, projects, info } } = aioApi;

    if (!socials) return <LoadingSection>No content</LoadingSection>
    if (!stack) return <LoadingSection>No content</LoadingSection>
    if (!projects) return <LoadingSection>No content</LoadingSection>
    if (!info) return <LoadingSection>No content</LoadingSection>

    return (
        <>
            <Head>
                <meta property="og:url" content="https://darknessxk.com/" />
                <title>Luiz Felipe @ portfolio</title>
            </Head>

            <Navbar logo={<Logo />} items={items} socials={socials} />
            <HeroOnboard />
            <StackSection stack={stack} />
            <ProjectsSection projects={projects} />
            <Footer logo={<Logo />} items={items} socials={socials} source={info[0].source} />
        </>
    )
}
