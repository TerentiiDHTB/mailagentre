import {folderStore} from "@/shared/stores/folderStore/folderStore.ts";

export const clickHandler = (folderName:string,
                             hide: () => void,
                             setErrMsgStatus: (arg: boolean) => void
): void => {
    if (folderName.length === 0){setErrMsgStatus(true)}
    else {
        folderStore.createFolder(folderName);
        hide();
        setErrMsgStatus(false)
    }
}