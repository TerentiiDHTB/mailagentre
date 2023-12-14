import styles from "./ui.module.scss"

import {FolderT} from "@/shared/types";

import {clickHandler} from "@/entities/folder/model/clickHandler.ts";

export const Folder = (props: FolderT) => {
    return(
        <div className={styles.folderWrapper}>
            <button
                onClick={() => {clickHandler(props.folderId)}}
                className={styles.folderName}>
                {props.folderName}
            </button>
        </div>
    )
}