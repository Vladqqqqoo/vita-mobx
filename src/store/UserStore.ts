import { makeAutoObservable, runInAction } from "mobx";
import axios from "axios";

type User = {
    id: string;
    name: string;
    age: number;
};

export class UserStore {
    users: User[] = [];

    constructor() {
        makeAutoObservable(this);
    }

    fetchUsers = () => {
        axios
            .get("https://jsonplaceholder.typicode.com/users")
            .then(({ data: users }) => {
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
}
