"use client";

import {WorkProject} from "@/util/types";
import {useState} from "react";
import {conditionalClassNames} from "@/util/css";
import {HiArrowLongLeft, HiArrowLongRight} from "react-icons/hi2";
import WorkCarouselItem from "@/components/landing/work/WorkCarouselItem";

interface WorkCarouselProps {

    projects: WorkProject[];

}

// Carousel filling up the entire width of the screen, max 2 projects at a time with last one being cut off

export default function WorkCarousel({projects}: WorkCarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(0);

    /**
     * Handles the next page button being clicked
     */
    function handleNextPage() {
        if (currentIndex >= projects.length - 2) {
            return;
        }

        setCurrentIndex(currentIndex + 1);
    }

    /**
     * Handles the previous page button being clicked
     */
    function handlePreviousPage() {
        if (currentIndex <= 0) {
            return;
        }

        setCurrentIndex(currentIndex - 1);
    }

    return (
        <div className="container mx-auto">
            <div className="relative h-[450px]">
                {
                    projects.map((project, index) => (
                        <WorkCarouselItem
                            project={project}
                            index={index}
                            currentIndex={currentIndex}
                            key={project.id}
                        />
                    ))
                }
            </div>

            <div className="mt-12 flex justify-center space-x-20">
                <div>
                    <HiArrowLongLeft
                        className={conditionalClassNames({
                            "text-5xl text-red-600 cursor-pointer": true,
                            "opacity-75": currentIndex === 0,
                        })}
                        onClick={handlePreviousPage}
                    />
                </div>
                <div>
                    <HiArrowLongRight
                        className={conditionalClassNames({
                            "text-5xl text-red-600 cursor-pointer": true,
                            "opacity-75": currentIndex === projects.length - 2,
                        })}
                        onClick={handleNextPage}
                    />
                </div>
            </div>
        </div>
    );
}