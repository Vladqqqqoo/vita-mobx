import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { useRootStore } from "../store/storeContext";

const RemoveUserButton = React.memo(function RemoveUserButton(props: any) {
    const { id, handleOnClick } = props;

    console.log("RemoveUserButton re-render");

    const handleRemoveUserButtonClick = () => {
        handleOnClick(id);
    };

    return <button onClick={handleRemoveUserButtonClick}>remove user</button>;
});

export const UserList = observer(function UserList() {
    const store = useRootStore();

    useEffect(() => {
        store.userStore.fetchUsers();
    }, []);

    console.log("userList re-render");

    return (
        <ul>
            {store.userStore.users.map((user) => {
                return (
                    <li key={user.id}>
                        {user.name}{" "}
                        <RemoveUserButton id={user.id} handleOnClick={store.userStore.removeUser} />
                    </li>
                );
            })}
        </ul>
    );
});
