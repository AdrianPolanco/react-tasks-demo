import { Guid } from "guid-typescript";

type BaseTask = {
    id: Guid;
    title: string;
    description: string;
    due_date?: Date | null;
    completed: boolean;
};

export default BaseTask;
