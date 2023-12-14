import {folderStore} from "@/shared/stores/folderStore/folderStore.ts";

const clickHandler = (folderId: string) => {
    folderStore.setCurrentFolder(folderId)
}

export {clickHandler}