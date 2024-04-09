import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Provider } from "react-redux";
import { taskStore } from "./redux/stores/store.ts";
import { CssBaseline, StyledEngineProvider } from "@mui/material";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <StyledEngineProvider injectFirst>
            <Provider store={taskStore}>
                <CssBaseline />
                <App />
            </Provider>
        </StyledEngineProvider>
    </React.StrictMode>
);
