import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Task from "../types/Task";
import { Guid } from "guid-typescript";
import BaseTask from "../types/BaseTask";

const taskState: Task[] = [];

export const taskSlice = createSlice({
    //Specifying the name of the slice, so it can make up the action based on the name + name of the reducer, example: "task/add"
    name: "tasks",
    initialState: taskState,
    reducers: {
        //Safe mutating syntax because under the hood it uses Immer, so it adapts to immutable syntax
        addTask: (state, action: PayloadAction<Task>) => {
            state.push(action.payload);
        },
        updateTask: (state, action: PayloadAction<BaseTask>) => {
            const updatedTask: BaseTask = action.payload;
            const index: number = state.findIndex(
                (task) => task.id === updatedTask.id
            );
            if (index !== -1)
                state[index] = {
                    ...state[index],
                    title: updatedTask.title,
                    description: updatedTask.description,
                    completed: updatedTask.completed,
                    last_update_at: new Date()
                };
        },
        removeTask: (state, action: PayloadAction<Guid>) => {
            const index = state.findIndex((task) => task.id === action.payload);
            state.splice(index, 1);
        },
    },
});

//Exporting actions, i.e: "tasks/add", "tasks/update" and "tasks/remove"
export const { addTask, updateTask, removeTask } = taskSlice.actions;
//Exporting reducers
export default taskSlice.reducer;
