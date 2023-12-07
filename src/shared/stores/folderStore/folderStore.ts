import {FolderT} from "@/shared/types";

import userFolders from "@/shared/startinfo/userFolders.json"
import {makeAutoObservable} from "mobx";

class FolderStore{
    private folders: FolderT[] = []

    getFolders = () => this.folders

    constructor() {
        userFolders.map((folder) => this.folders.push(folder))

        makeAutoObservable(this, {}, {deep: true})
    }
}

export const folderStore = new FolderStore()