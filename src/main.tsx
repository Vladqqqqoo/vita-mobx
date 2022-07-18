import React from "react";
import ReactDOM from "react-dom/client";
import { configure } from "mobx";

import App from "./components/app/App";
import "./index.css";
import { RootStore } from "./store/RootStore";
import { RootStoreProvider } from "./store/storeContext";

configure({
    enforceActions: "always",
    computedRequiresReaction: true,
    reactionRequiresObservable: true,
    observableRequiresReaction: true,
    disableErrorBoundaries: true,
});

const rootStore = new RootStore();

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <RootStoreProvider value={rootStore}>
            <App />
        </RootStoreProvider>
    </React.StrictMode>,
);
