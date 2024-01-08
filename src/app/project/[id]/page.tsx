import {getProjectById} from "@/util/utils";
import HeroSection from "@/components/common/HeroSection";
import {notFound} from "next/navigation";
import ProjectOverview from "@/components/project/ProjectOverview";
import ProjectBlocks from "@/components/project/ProjectBlocks";

interface ProjectPageParams {

    id: string;

}

export default async function ProjectPage({params}: { params: ProjectPageParams }) {
    const {id} = params;
    const project = await getProjectById(id);
    // If the project doesn't exist, return a 404 page.
    if (!project) {
        return notFound();
    }

    return (
        <main className="flex min-h-screen flex-col">
            <HeroSection title="Project Information"/>
            <ProjectOverview project={project}/>
            <ProjectBlocks project={project}/>
        </main>
    );
}