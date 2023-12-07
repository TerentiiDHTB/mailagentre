import {observer} from "mobx-react-lite";

import styles from "./ui.module.scss"
import {folderStore} from "@/shared/stores/folderStore/folderStore.ts";

export const FoldersSection = observer(() => {
    return(
        <div className={styles.foldersSectionWrapper}>
            <ul className={styles.foldersListWrapper}>
                {folderStore.getFolders().map(folder =>
                    <li key={folder.folderId} className={styles.folderWrapper}>{folder.folderName}</li>
                )}
            </ul>
        </div>
    )
})