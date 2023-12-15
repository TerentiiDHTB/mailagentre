import {FolderT} from "@/shared/types";

import userFolders from "@/shared/startinfo/userFolders.json"
import generalFolders from "@/shared/startinfo/generalFolders.json"

import {makeAutoObservable} from "mobx";
import {nanoid} from "nanoid";

//TODO: сделать айди папок енумами

class FolderStore{
    private folders: FolderT[]
    private currentFolder: string

    getFolders = (): FolderT[] => this.folders

    getCurrentFolder = (): string => this.currentFolder

    setCurrentFolder = (folder: string): void => {
        this.currentFolder = folder
    }

    createFolder = (folderName: string): void => {this.folders.push({folderName, folderId: nanoid(), enableEdit: true})}

    renameFolder = (newName: string, folderId: string): void => {
        for (let folder of this.folders){
            if (folder.folderId === folderId){
                folder.folderName = newName
                return
            }
        }
    }

    deleteFolder = (folderId: string): void => {
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