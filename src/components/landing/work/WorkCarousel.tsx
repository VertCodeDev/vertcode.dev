"use client";

import {Project, WorkProject} from "@/util/types";
import {useEffect, useState} from "react";
import {conditionalClassNames} from "@/util/css";
import {HiArrowLongLeft, HiArrowLongRight} from "react-icons/hi2";
import WorkCarouselItem from "@/components/landing/work/WorkCarouselItem";
import {Carousel, CarouselContent, CarouselNext, CarouselPrevious} from "@/components/common/Carousel";

interface WorkCarouselProps {

    projects: Project[];

}

// Carousel filling up the entire width of the screen, max 2 projects at a time with last one being cut off

export default function WorkCarousel({projects}: WorkCarouselProps) {
    return (
        <div className="container mx-auto">
            <Carousel>
                <CarouselContent className="h-[450px]">
                    {
                        projects.map((project, index) => (
                            <WorkCarouselItem
                                project={project}
                                key={project.id}
                            />
                        ))
                    }
                </CarouselContent>


                <div className="mt-12 flex justify-center space-x-20">
                    <CarouselPrevious/>
                    <CarouselNext/>
                </div>
            </Carousel>
        </div>
    );
}