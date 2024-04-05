import { Guid } from "guid-typescript";

export default interface Task {
    id: Guid;
    title: string;
    description: string;
    created_at: Date;
    due_date: Date;
    completed: boolean;
}
