import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import "./index.css";
import { RootStore } from "./store/RootStore";
import { RootStoreProvider } from "./store/storeContext";

const rootStore = new RootStore();

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <RootStoreProvider value={rootStore}>
            <App />
        </RootStoreProvider>
    </React.StrictMode>,
);
