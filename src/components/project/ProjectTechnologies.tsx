import {Technology} from "@/util/types";
import React from "react";
import ProjectTechnology from "@/components/project/ProjectTechnology";

interface ProjectTechnologiesProps {

    technologies: (string | Technology)[];

}

export default function ProjectTechnologies({technologies}: ProjectTechnologiesProps) {
    return (
        <div className="flex flex-wrap justify-between w-full border-2 border-red-600 rounded-lg px-2 py-1">
            {
                technologies.map((technology, index) => (
                    <ProjectTechnology key={index} technology={technology}/>
                ))
            }
        </div>
    )
}