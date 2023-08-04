import React from "react";
import {ContentSection} from "@components/ContentSection";
import {Project} from "@components/Project";
import usePageNavigation from "@context/PageNavigation.context";
import {IProject} from "@interfaces/IProject.interface";
import CardImage from "@/images/card_image.png"

export interface ProjectsSectionProps {
    projects: Array<IProject>
}

export function ProjectsSection({ projects }: ProjectsSectionProps) {
    const ref = React.useRef<HTMLDivElement | null>(null);
    const { setRef } = usePageNavigation();

    React.useEffect(() => {
        if (ref.current) {
            setRef("projects", ref);
        }
    }, [ref, setRef])

    return (
        <ContentSection ref={ref} title={"Projects"} description={"Things I’ve built so far"}>
            <div className={"grid grid-cols-3 mx-auto my-4"}>
                {projects.map((project, key) =>
                    <Project
                        key={key}
                        cardImageSrc={project.imageSrc === "#" ? CardImage : project.imageSrc}
                        cardImageAlt={project.title}
                        title={project.title}
                        description={project.description}
                        stack={project.stack}
                        preview={project.preview}
                        source={project.source}
                    />
                )}
            </div>
        </ContentSection>
    )
}
