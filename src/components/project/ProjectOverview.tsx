import {Project, ProjectCategory} from "@/util/types";
import ProjectTechnologies from "@/components/project/ProjectTechnologies";
import Image from "next/image";

interface ProjectOverviewProps {

    project: Project;

}

export default function ProjectOverview({project}: ProjectOverviewProps) {
    return (
        <section className="py-8">
            <div className="container mx-auto relative">
                <div className="flex flex-wrap">
                    <div className="w-full lg:w-1/2 px-4 py-2">
                        <div className="flex flex-col space-y-4">
                            <h2 className="font-medium text-lg text-red-600">
                                {formatProjectCategory(project.category)}
                            </h2>
                            <div className="flex flex-col space-y-4">
                                <h1 className="text-5xl">
                                    {project.name}
                                </h1>
                                <p className="opacity-75 lg:max-w-[calc(100%/3*2.5)]">
                                    {project.description}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 px-4 py-2">
                        <div className="h-full flex flex-col space-y-4">
                            <div>
                                <h1 className="text-2xl">
                                    Technologies
                                </h1>
                                <p className="opacity-75">
                                    These are the technologies used in this project.
                                </p>
                            </div>
                            <ProjectTechnologies technologies={project.technologies}/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

/**
 * Format a project category to a string.
 *
 * @param category The category to format
 */
function formatProjectCategory(category: string | ProjectCategory) {
    if (typeof category === "string") {
        return category;
    }

    return category.name;
}

/**
 * Format a project's start and end dates to a string.
 *
 * @param startDateRaw The start date
 * @param endDateRaw The end date
 */
function formatProjectDates(startDateRaw: string, endDateRaw: string | undefined | null) {
    const startDate = new Date(startDateRaw);
    if (!endDateRaw) {
        return startDate.toLocaleDateString();
    }

    const endDate = new Date(endDateRaw);

    return `${startDate.toLocaleDateString()} - ${endDate.toLocaleDateString()}`;
}