import { useRootStore } from "../store/storeContext";
import { UsersCounter } from "./usersCounter";
import { observer } from "mobx-react-lite";
import { UserList } from "./userList";

const App = observer(function App() {
    const store = useRootStore();

    const handleOnClick = () => {
        console.log("it works");
        store.userStore.addUser({
            id: `${new Date().getMilliseconds()}`,
            name: `Vlad ${new Date().getMilliseconds()}`,
            age: 20,
        });
    };

    console.log("App re-render");

    return (
        <div>
            <button onClick={handleOnClick}>Add user</button>
            <br/>
            <UserList />
            <UsersCounter />
        </div>
    );
});

export default App;
