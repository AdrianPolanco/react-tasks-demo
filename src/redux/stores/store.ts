import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "../slices/tasksSlice";

export const taskStore = configureStore({
    reducer: {
        //Importing the reducers defined in the slice created in taskSlice.ts
        tasks: taskReducer,
    },
});

export type RootState = ReturnType<typeof taskStore.getState>;
export type AppDispatch = typeof taskStore.dispatch;
