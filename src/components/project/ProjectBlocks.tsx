import {Project} from "@/util/types";
import exp from "node:constants";
import ProjectBlock from "@/components/project/ProjectBlock";

interface ProjectBlocksProps {

    project: Project;

}

export default function ProjectBlocks({project}: ProjectBlocksProps) {
    return (
        <section className="py-8">
            <div className="container mx-auto">
                <div className="flex flex-wrap">
                    {
                        project.projectBlocks.map((block, index) => (
                            <ProjectBlock
                                key={index}
                                block={block}
                                uneven={index % 2 === 0}
                            />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}