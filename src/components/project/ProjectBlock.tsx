import {ProjectsBlock} from "@/util/types";
import Markdown from "react-markdown";
import remarkBreaks from "remark-breaks";
import Image from "next/image";

interface ProjectBlockProps {

    block: ProjectsBlock;
    uneven: boolean;

}

export default function ProjectBlock({block, uneven}: ProjectBlockProps) {
    return (
        <div
            className="flex flex-wrap w-full my-2"
            style={{
                flexDirection: uneven ? "row-reverse" : "row"
            }}
        >
            <div className="flex flex-col w-full lg:w-1/2 space-y-4 px-4 py-2">
                <h2 className="text-3xl font-bold text-center md:text-left">{block.title}</h2>
                <Markdown
                    className="font-light"
                    skipHtml={false}
                    remarkPlugins={[remarkBreaks]}
                >
                    {block.content.replace(/\n/gi, "&nbsp; \n")}
                </Markdown>
            </div>
            <div className="flex items-center justify-center w-full lg:w-1/2 px-4 py-2">
                <Image
                    src={`${process.env.NEXT_PUBLIC_CDN_URL}${block.image.url}`}
                    alt={block.image.alt}
                    layout="fill"
                    className="!w-full !h-full !object-contain !relative"
                />
            </div>
        </div>
    )
}