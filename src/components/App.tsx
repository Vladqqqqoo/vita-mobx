import React from "react";
import { action } from "mobx";
import { useRootStore } from "../store/storeContext";
import { UsersCounter } from "./usersCounter";
import { UserList } from "./userList";

const App = function App() {
    const store = useRootStore();
    //if a component don't use observable values, we don't need to wrap in observer function
    //in our case we use only handlers for state changing which are wrapped in action,
    //but we don't use any observable values like "users"

    const handleOnClick = () => {
        store.userStore.addUser({
            id: `${new Date().getMilliseconds()}`,
            name: `Vlad ${new Date().getMilliseconds()}`,
            age: 20,
        });
    };

    console.log("App re-render");

    return (
        <div>
            {/*each event handler should be wrapper in "action"
            to garantee that all state changes will be produced in one transaction
            and no intermediate value will appear*/}
            <button onClick={action(handleOnClick)}>Add user</button>
            <br />
            <UserList />
            <UsersCounter />
        </div>
    );
};

export default App;

//try to change the repo
