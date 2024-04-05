import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Task from "../types/Task";
import { Guid } from "guid-typescript";

const initialState: Task[] = [];

export const taskSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {
        add: (state, action: PayloadAction<Task>) => {
            state.push(action.payload);
        },
        update: (state, action: PayloadAction<Task>) => {
            const updatedTask: Task = action.payload;
            const index: number = state.findIndex(
                (task) => task.id === updatedTask.id
            );

            if (index !== -1) state[index] = updatedTask;
        },
        remove: (state, action: PayloadAction<Guid>) => {
            const index = state.findIndex((task) => task.id === action.payload);
            state.splice(index, 1);
        },
    },
});

export const { add, update, remove } = taskSlice.actions;
export default taskSlice.reducer;
