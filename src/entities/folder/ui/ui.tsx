import styles from "./ui.module.scss"

import {FolderT} from "@/shared/types";

import deleteIcon from "@/shared/icons/trashcan-img.svg"
import {useModal} from "@/shared/modalWindowTemplate";
import {DeleteFolderModalWindow} from "../ui/deleteFolderModalWindow.tsx";
import {folderStore} from "@/shared/stores/folderStore/folderStore.ts";

export const Folder = (props: FolderT) => {
    const [isShown, hide] = useModal()

    return(
        <div className={styles.folderWrapper}>
            <button
                onClick={() => {folderStore.setCurrentFolder(props.folderId)}}
                className={styles.folderName}>
                {props.folderName}
            </button>
            {props.enableEdit
                ?<img src={deleteIcon} alt={"deletefolder"} onClick={hide} className={styles.deleteFolder}/>
                :null}
            <DeleteFolderModalWindow windowName={"Удалить папочку"} isShown={isShown} hide={hide} folderName={props.folderName} folderId={props.folderId}/>
        </div>
    )
}