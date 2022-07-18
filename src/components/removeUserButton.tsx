import React from "react";
import { useRootStore } from "../store/storeContext";
import { action } from "mobx";

export const RemoveUserButton = React.memo(function RemoveUserButton(props: { id: string }) {
    const { id } = props;
    const store = useRootStore();

    console.log("RemoveUserButton re-render");

    const handleRemoveUserButtonClick = () => {
        store.userStore.removeUser(id);
    };

    return <button onClick={action(handleRemoveUserButtonClick)}>remove user</button>;
});
