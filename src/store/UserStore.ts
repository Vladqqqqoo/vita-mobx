import { autorun, IReactionDisposer, makeAutoObservable, runInAction } from "mobx";
import axios from "axios";

type User = {
    id: string;
    name: string;
    age: number;
};

export class UserStore {
    users: User[] = [];
    usersCountDisposer: IReactionDisposer;

    constructor() {
        makeAutoObservable(this);

        //it's better to clean autorun, reaction and when after we don't need it, because
        //they subscribe for observer values forever.
        //in this case autorun subscribe only on its own values, so it means after UserStore instance
        // will be destroyed autorun will dispose
        this.usersCountDisposer = autorun(() => {
            console.log("The amount of users has changed");
            console.log("Current amount is", this.usersCount);
        });
    }

    fetchUsers = () => {
        axios
            .get("https://jsonplaceholder.typicode.com/users")
            .then(({ data: users }) => {
                //no need to use special named action (otherwise context warning)
                runInAction(() => {
                    this.users = users;
                });
            })
            .catch((error) => {
                console.log("Error when try to fetch users ", error);
            });
    };

    addUser = (user: User) => {
        this.users.push(user);
    };

    removeUser = (userId: string) => {
        this.users.splice(
            this.users.findIndex((user) => user.id === userId),
            1,
        );
    };

    get usersCount(): number {
        return this.users.length;
    }

    dispose = () => {
        this.usersCountDisposer();
    };
}
