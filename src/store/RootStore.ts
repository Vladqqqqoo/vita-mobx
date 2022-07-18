import { makeAutoObservable } from "mobx";
import { UserStore } from "./UserStore";

export class RootStore {
    public readonly userStore: UserStore;

    constructor() {
        //no need to use makeautoobesrvable
        this.userStore = new UserStore();
    }
}
