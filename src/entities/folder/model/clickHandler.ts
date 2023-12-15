import {folderStore} from "@/shared/stores/folderStore/folderStore.ts";

const clickHandler = (folderId: string) => {
    folderStore.setCurrentFolderId(folderId)
}

export {clickHandler}