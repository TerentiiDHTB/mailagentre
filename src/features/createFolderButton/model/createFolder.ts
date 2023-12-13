import {folderStore} from "@/shared/stores/folderStore/folderStore.ts";

export const createFolder = (folderName:string) => {
    folderStore.createFolder(folderName)
}