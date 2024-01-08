export interface ContactAPIResponse {

    success: boolean;
    error?: string;

}

export interface WorkProject {

    id: string;
    name: string;
    thumbnail: string;

}

/**
 * Payload Types
 */
export interface Technology {
    id: string;
    name: string;
    bgColor: string;
    icon: Media;
    updatedAt: string;
    createdAt: string;
}

export interface Media {
    id: string;
    alt: string;
    updatedAt: string;
    createdAt: string;
    url?: string | null;
    filename?: string | null;
    mimeType?: string | null;
    filesize?: number | null;
    width?: number | null;
    height?: number | null;
}

export interface Project {
    id: string;
    thumbnail: Media;
    name: string;
    startDate: string;
    endDate?: string | null;
    category: string | ProjectCategory;
    description: string;
    technologies: (string | Technology)[];
    projectBlocks: ProjectsBlock[];
    updatedAt: string;
    createdAt: string;
}

export interface ProjectCategory {
    id: string;
    name?: string | null;
    updatedAt: string;
    createdAt: string;
}

export interface ProjectsBlock {
    id: string;
    title: string;
    content: string;
    image: Media;
    updatedAt: string;
    createdAt: string;
}

export interface Partner {
    id: string;
    name: string;
    logo: Media;
    invertColors: boolean;
    url: string;
    updatedAt: string;
    createdAt: string;
}