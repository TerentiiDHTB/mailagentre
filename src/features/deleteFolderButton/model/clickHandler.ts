import {folderStore} from "@/shared/stores/folderStore/folderStore.ts";

export const clickHandler = (folderId: string): void => {
    folderStore.deleteFolder(folderId)
}