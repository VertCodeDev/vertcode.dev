import {WorkProject} from "@/util/types";
import {classNames} from "@/util/css";
import {createRef, useEffect} from "react";
import {CarouselItem} from "@/components/common/Carousel";

interface WorkCarouselItemProps {

    project: WorkProject;

    index: number;
    currentIndex: number;

}

export default function WorkCarouselItem({project, index, currentIndex}: WorkCarouselItemProps) {
    return (
        <CarouselItem className="lg:basis-3/4 xl:basis-1/2">
            <a
                key={project.id}
                href={`/work/${project.id}`}
                className={classNames(
                    "w-full h-full",
                    "transition-all duration-300 ease-in-out",
                    "z-10 cursor-pointer"
                )}
                aria-label={project.name}
            >
                <div
                    className="w-full h-full group rounded-xl overflow-x-hidden"
                    style={{
                        background: `url(${project.thumbnail}) center center / cover`,
                    }}
                >
                    <div className={classNames(
                        "flex flex-col justify-center items-center h-full",
                        "opacity-0 group-hover:opacity-100",
                        "bg-[rgba(0,0,0,.2)] backdrop-blur-sm",
                        "cursor-pointer",
                        "transition-all duration-300 ease-in-out",
                    )}>
                        <h2 className="text-2xl text-white">
                            {project.name}
                        </h2>
                    </div>
                </div>
            </a>
        </CarouselItem>
    )
}