import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { useRootStore } from "../store/storeContext";
import { runInAction } from "mobx";
import { RemoveUserButton } from "./removeUserButton";

export const UserList = observer(function UserList() {
    const store = useRootStore();

    useEffect(() => {
        runInAction(() => {
            store.userStore.fetchUsers();
        });
    }, []);

    console.log("userList re-render");

    return (
        <ul>
            {store.userStore.users.map((user) => {
                return (
                    <li key={user.id}>
                        {user.id} <RemoveUserButton id={user.id} />
                    </li>
                );
            })}
        </ul>
    );
});
