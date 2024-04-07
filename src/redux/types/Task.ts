import BaseTask from "./BaseTask";

type Task = BaseTask & {
    created_at: Date;
    last_update_at: Date | null;
};

export default Task;
