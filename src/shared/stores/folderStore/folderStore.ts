import {FolderT} from "@/shared/types";

import userFolders from "@/shared/startinfo/userFolders.json"
import generalFolders from "@/shared/startinfo/generalFolders.json"

import {makeAutoObservable} from "mobx";
import {nanoid} from "nanoid";

class FolderStore{
    private folders: FolderT[]
    private currentFolder: string

    getFolders = () => this.folders

    getCurrentFolder = () => this.currentFolder

    setCurrentFolder = (folder: string) => {
        this.currentFolder = folder
    }

    createFolder = (folderName: string) => {this.folders.push({folderName, folderId: nanoid(), enableEdit: true})}

    renameFolder = (newName: string, folderId: string) => {
        this.folders.map((item) => {
            if (item.folderId === folderId){item.folderName = newName}
        })
    }

    deleteFolder = (folderId: string) => {
        this.folders = this.folders.filter((item) => item.folderId !== folderId)
        this.currentFolder = "inbox"
    }

    constructor() {
        this.folders = []
        this.currentFolder = "inbox"

        generalFolders.map((folder) => this.folders.push({...folder, enableEdit: false} as FolderT))

        userFolders.map((folder) => this.folders.push({...folder, enableEdit: true} as FolderT))

        makeAutoObservable(this, {}, {deep: true})
    }
}

export const folderStore = new FolderStore()