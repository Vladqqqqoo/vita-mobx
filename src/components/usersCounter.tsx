import { observer } from "mobx-react-lite";
import { useRootStore } from "../store/storeContext";

export const UsersCounter = observer(function UsersCounter() {
    const store = useRootStore();

    console.log("UsersCounter re-render");

    return (
        <div>
            <span>The amount of users {store.userStore.usersCount}</span>
        </div>
    );
});
