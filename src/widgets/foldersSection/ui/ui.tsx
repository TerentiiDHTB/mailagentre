import {observer} from "mobx-react-lite";

import styles from "./ui.module.scss"
import {folderStore} from "@/shared/stores/folderStore/folderStore.ts";
import {Folder} from "@/entities/folder/ui/ui.tsx";
import {CreateFolderButton} from "@/features/createFolderButton";
import {WriteMailButton} from "@/features/writeMailButton";

export const FoldersSection = observer(() => {
    return(
        <div className={styles.foldersSectionWrapper}>
            <WriteMailButton/>
            <ul className={styles.foldersListWrapper}>
                {folderStore.getFolders().map(folder =>
                    <li key={folder.folderId} className={styles.folderWrapper}><Folder {...folder}/></li>
                )}
            </ul>
            <CreateFolderButton/>
        </div>
    )
})