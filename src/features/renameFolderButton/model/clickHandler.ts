import {folderStore} from "@/shared/stores/folderStore/folderStore.ts";

//не представляю как это правильно и красиво оформить..
export const clickHandler = (newFolderName: string, folderId: string,
                             hideModal:() => void,
                             setErrStatus: (args: boolean) => void
): void => {
    if (newFolderName.length === 0){setErrStatus(true)}
    else{
        folderStore.renameFolder(newFolderName, folderId)
        hideModal()
    }
}