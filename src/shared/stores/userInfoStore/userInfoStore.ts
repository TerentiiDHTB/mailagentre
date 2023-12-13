import {makeAutoObservable} from "mobx";

import userLogo from "../../icons/userImg.png"

class UserInfoStore {
    private userName: string
    private userImg: string

    getUserName = (): string => this.userName

    getUserImage = (): string => this.userImg

    constructor() {
        this.userName = "someUser"
        this.userImg = userLogo

        makeAutoObservable(this)
    }
}

export const userInfoStore: UserInfoStore = new UserInfoStore()

