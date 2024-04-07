import { addTask, updateTask, removeTask } from "../slices/tasksSlice";
import { taskStore } from "./store";
import { describe, expect, test } from "vitest";
import Task from "../types/Task";
import { Guid } from "guid-typescript";
import BaseTask from "../types/BaseTask";

describe("Task Store tests", () => {
    test("Testing add task reducer", () => {
        const task: Task = {
            id: Guid.create(),
            title: "First task",
            description: "This is the first task description",
            created_at: new Date(),
            due_date: null,
            last_update_at: null,
            completed: false,
        };
        taskStore.dispatch(addTask(task));
        const { tasks } = taskStore.getState();

        //Eql differs from .equals in that eql is optimal to compare value types (like numbers), while equals compares reference values (like objects)
        expect(tasks.length).to.eql(1);
        expect(tasks[0].title).to.eql("First task");
    });

    test("Testing update task reducer", () => {
        const previousState: Task[] = taskStore.getState().tasks;
        const updatedTask: BaseTask = {
            id: previousState[0].id,
            title: "Updated first task",
            description: "This is the updated first task description",
            due_date: null,
            completed: true,
        };
        taskStore.dispatch(updateTask(updatedTask));
        const { tasks } = taskStore.getState();
        expect(tasks.length).to.eql(1);
        expect(tasks[0].id).to.eql(previousState[0].id);
        expect(tasks[0].title).to.eql(updatedTask.title);
        expect(tasks[0].last_update_at).to.not.be.null;
    });

    test("Testing delete task reducer", () => {
        const id: Guid = taskStore.getState().tasks[0].id;
        taskStore.dispatch(removeTask(id));
        const { tasks } = taskStore.getState();
        expect(tasks.length).to.eql(0);
    });
});
