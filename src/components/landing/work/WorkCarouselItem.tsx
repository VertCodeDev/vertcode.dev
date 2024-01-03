import {WorkProject} from "@/util/types";
import {classNames} from "@/util/css";

interface WorkCarouselItemProps {

    project: WorkProject;

    index: number;
    currentIndex: number;

}

export default function WorkCarouselItem({project, index, currentIndex}: WorkCarouselItemProps) {
    return (
        <a
            key={project.id}
            href={`/work/${project.id}`}
            className={classNames(
                "absolute top-0 left-0 w-1/2 h-full",
                "transition-all duration-300 ease-in-out",
                "rounded-xl overflow-x-hidden",
                "z-10 cursor-pointer",
            )}
            style={{
                left: `calc(${(index - currentIndex) * 50}% + ${index * 2.5}rem)`,
            }}
        >
            <div
                className="w-full h-full group"
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
    )
}