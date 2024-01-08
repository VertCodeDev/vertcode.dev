import {Partner, Project} from "@/util/types";
import exp from "node:constants";

/**
 * Get a Project by its ID.
 *
 * @param id the id of the project to get
 */
export async function getProjectById(id: string): Promise<Project | undefined> {
    const apiURL = process.env.API_URL;
    if (!apiURL) {
        throw new Error("API_URL is not defined");
    }

    const response = await fetch(`${apiURL}/projects/${id}`);
    if (response.ok) {
        const projectResponse = await response.json();
        if (projectResponse.errors) {
            return undefined;
        }

        return projectResponse as Project;
    }

    return undefined;
}

/**
 * Get all projects.
 */
export async function getProjects(): Promise<Project[]> {
    const apiURL = process.env.API_URL;
    if (!apiURL) {
        throw new Error("API_URL is not defined");
    }

    const response = await fetch(`${apiURL}/projects`);
    if (!response.ok) {
        return [];
    }

    const projectsResponse: {
        docs: Project[];
    } = await response.json();
    return projectsResponse.docs;
}

export async function getPartners(): Promise<Partner[]> {
    const apiURL = process.env.API_URL;
    if (!apiURL) {
        throw new Error("API_URL is not defined");
    }

    const response = await fetch(`${apiURL}/partners`);
    if (!response.ok) {
        return [];
    }

    const partnersResponse: {
        docs: Partner[];
    } = await response.json();
    return partnersResponse.docs;
}