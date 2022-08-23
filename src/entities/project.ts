export interface ProjectPayload {
    name: string;
    icon: string;
}

export interface ProjectResponse {
    createdAt: string;
    deleted: boolean;
    icon: string;
    id: string;
    name: string;
    userId: string;
}