import styles from "./ui.module.scss"

import {FolderT} from "@/shared/types";

export const Folder = (props: FolderT) => {
    return(
        <div className={styles.folderWrapper}>
            {props.folderName}
        </div>
    )
}