import { makeAutoObservable } from "mobx";
import { UserStore } from "./UserStore";

export class RootStore {
    public readonly userStore: UserStore;

    constructor() {
        makeAutoObservable(this);
        this.userStore = new UserStore();
    }
}
