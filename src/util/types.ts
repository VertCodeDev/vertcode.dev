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
export interface Partner {
    id: string;
    name: string;
    logo: string | Media;
    url: string;
    updatedAt: string;
    createdAt: string;
}

export interface CodingLanguage {
    id: string;
    name?: string | null;
    icon?: string | Media | null;
    updatedAt: string;
    createdAt: string;
}

export interface Media {
    id: string;
    alt: string;
    image: string | Media;
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
    name: string;
    description: {
        [k: string]: unknown;
    }[];
    start_date: string;
    end_date?: string | null;
    thumbnail: string | Media;
    coding_languages?: (string | CodingLanguage)[] | null;
    project_blocks?: (string | ProjectsBlock)[] | null;
    updatedAt: string;
    createdAt: string;
}

export interface ProjectsBlock {
    id: string;
    title: string;
    description: {
        [k: string]: unknown;
    }[];
    image: string | Media;
    updatedAt: string;
    createdAt: string;
}

