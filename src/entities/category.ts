import { Task } from "./task";

export interface Category {
    id?: string;
    name: string;
    projectId: string;
    deleted?: boolean;
    tasks?: Task[];
}