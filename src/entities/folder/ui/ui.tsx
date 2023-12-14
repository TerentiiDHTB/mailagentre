import styles from "./ui.module.scss"

import {FolderT} from "@/shared/types";

import {folderStore} from "@/shared/stores/folderStore/folderStore.ts";

export const Folder = (props: FolderT) => {
    return(
        <div className={styles.folderWrapper}>
            <button
                onClick={() => {folderStore.setCurrentFolder(props.folderId)}}
                className={styles.folderName}>
                {props.folderName}
            </button>
        </div>
    )
}