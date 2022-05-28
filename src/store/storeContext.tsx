import { createContext, useContext } from "react";
import React from "react";
import { RootStore } from "./RootStore";

const StoreContext = createContext<RootStore | undefined>(undefined);

type RootStoreProvider = {
    value: RootStore
}

export const RootStoreProvider: React.FC<React.PropsWithChildren<RootStoreProvider>> = (props) => {
    return <StoreContext.Provider value={props.value}>{props.children}</StoreContext.Provider>;
};

export const useRootStore = () => {
    const context = useContext(StoreContext);

    if (context === undefined) {
        throw new Error("store must be used withing RootStoreProvider");
    }

    return context;
};
