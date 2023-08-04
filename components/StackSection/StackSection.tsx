import * as Tooltip from '@radix-ui/react-tooltip';
import { cva } from "class-variance-authority"
import React from "react";
import { twMerge } from "tailwind-merge"
import {StackTagType} from "@/types/StackTag.type";
import {ContentSection} from "@components/ContentSection";
import {Label} from "@components/Label";
import {Tag} from "@components/Tag";
import {StackTagConstants} from "@constants/StackTag.constants";
import usePageNavigation from "@context/PageNavigation.context";
import {GetIconFromStringHelper} from "@helpers/GetIconFromString.helper";
import {IStack} from "@interfaces/IStack.interface";

const stackItem = cva(
    [
        "w-24", "h-24", "px-4"
    ],
    {
        variants: {},
        defaultVariants: {},
    }
)

export interface StackSectionProps {
    stack: Array<IStack>
}

export function StackSection({ stack }: StackSectionProps) {
    const ref = React.useRef<HTMLDivElement | null>(null);
    const { setRef } = usePageNavigation();

    React.useEffect(() => {
        if (ref.current) {
            setRef("stack", ref);
        }
    }, [ref, setRef])

    const [SelectedTags, setSelectedTags] = React.useState<Array<StackTagType>>([]);

    const ToggleTag = (tag: StackTagType) => {
        if (SelectedTags.includes(tag)) {
            setSelectedTags(SelectedTags.filter((t) => t !== tag));
        } else {
            setSelectedTags([...SelectedTags, tag]);
        }
    }

    return (
        <ContentSection ref={ref} title={"Tech Stack"} description={"Technologies I’ve been working with recently"}>
            <div className="grid grid-cols-6 mx-auto w-fit">
                {StackTagConstants.map((tag, index) => {
                        const count = stack.filter(({Tags}) => Tags.includes(tag)).length;
                        if (count === 0) return null;
                        return <Tag key={index} name={`${tag} (${count})`} selected={SelectedTags.includes(tag)} onClick={() => ToggleTag(tag)}/>
                    })}
            </div>

            <div className={"grid grid-cols-8 mx-auto my-4"}>
                {
                    stack
                        .filter(({Tags}) => SelectedTags.length === 0 || Tags.some((tag) => SelectedTags.includes(tag)))
                        .sort(({Name: a}, {Name: b}) => a.localeCompare(b))
                        .sort(({Tags: a}, {Tags: b}) => a.length - b.length)
                        .map(({Item, Class, Name}, index) => {
                            const Icon = GetIconFromStringHelper(Item);
                            if (Icon === null || Icon === undefined) return null
                            return <Tooltip.Provider key={index}>
                                <Tooltip.Root>
                                    <Tooltip.Trigger>
                                        <Icon key={index} className={twMerge(stackItem({ className: Class }))} />
                                    </Tooltip.Trigger>
                                    <Tooltip.Portal>
                                        <Tooltip.Content className="bg-gray-100 rounded p-3" sideOffset={1}>
                                            <Label>{Name}</Label>
                                            <Tooltip.Arrow className="fill-gray-100" />
                                        </Tooltip.Content>
                                    </Tooltip.Portal>

                                </Tooltip.Root>
                            </Tooltip.Provider>
                        })

                }
            </div>
        </ContentSection>
    )
}
