import {FolderT} from "@/shared/types";

import userFolders from "@/shared/startinfo/userFolders.json"
import generalFolders from "@/shared/startinfo/generalFolders.json"

import {makeAutoObservable} from "mobx";
import {nanoid} from "nanoid";

//TODO: сделать айди папок енумами

class FolderStore{
    private folders: FolderT[]
    private currentFolderId: string

    getFolders = (): FolderT[] => this.folders

    getCurrentFolderId = (): string => this.currentFolderId

    setCurrentFolderId = (folder: string): void => {
        this.currentFolderId = folder
    }

    createFolder = (folderName: string): void => {this.folders.push({folderName, folderId: nanoid(), enableEdit: true})}

    renameFolder = (newName: string, folderId: string): void => {
        for (const folder of this.folders){
            if (folder.folderId === folderId){
                folder.folderName = newName
                return
            }
        }
    }

    deleteFolder = (folderId: string): void => {
        this.folders = this.folders.filter((item) => item.folderId !== folderId)
        this.currentFolderId = "inbox"
    }

    constructor() {
        this.folders = []
        this.currentFolderId = "inbox"

        generalFolders.map((folder) => this.folders.push({...folder, enableEdit: false} as FolderT))

        userFolders.map((folder) => this.folders.push({...folder, enableEdit: true} as FolderT))

        makeAutoObservable(this, {}, {deep: true})
    }
}

export const folderStore = new FolderStore()