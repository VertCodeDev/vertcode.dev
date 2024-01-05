import {WorkProject} from "@/util/types";
import {classNames} from "@/util/css";
import {createRef, useEffect} from "react";

interface WorkCarouselItemProps {

    project: WorkProject;

    index: number;
    currentIndex: number;

}

export default function WorkCarouselItem({project, index, currentIndex}: WorkCarouselItemProps) {
    const ref = createRef<HTMLAnchorElement>();

    useEffect(() => {
        /**
         * Handles the window being resized
         */
        function handleResize() {
            const currentWidth = window.innerWidth;
            const current = ref.current;
            if (!current) {
                return;
            }

            // If the window is xl or larger
            if (currentWidth >= 1280) {
                current.style.left = `calc(${(index - currentIndex) * 50}% + ${index * 2.5}rem)`;
                return;
            }

            // If the window is lg or larger
            if (currentWidth >= 1024) {
                current.style.left = `calc(${(index - currentIndex) * 75}% + ${index * 2.5}rem)`;
                return;
            }

            // Mobile
            current.style.left = `calc(${(index - currentIndex) * 100}%)`;
        }

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, [currentIndex, index, ref]);

    return (
        <a
            key={project.id}
            href={`/work/${project.id}`}
            className={classNames(
                "absolute top-0 left-0 w-full lg:w-3/4 xl:w-1/2 h-full",
                "transition-all duration-300 ease-in-out",
                "z-10 cursor-pointer px-2"
            )}
            ref={ref}
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
    )
}