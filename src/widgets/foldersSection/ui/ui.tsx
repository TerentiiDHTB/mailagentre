import {observer} from "mobx-react-lite";

import styles from "./ui.module.scss"

import {folderStore} from "@/shared/stores/folderStore/folderStore.ts";

import {Folder} from "@/entities/folder/";
import {CreateFolderButton} from "@/features/createFolderButton";
import {WriteMailButton} from "@/features/writeMailButton";
import {DeleteFolderButton} from "@/features/deleteFolderButton";
import {RenameFolderButton} from "@/features/renameFolderButton";

export const FoldersSection = observer(() => {
    return(
        <div className={styles.foldersSectionWrapper}>
            <WriteMailButton/>
            <ul className={styles.foldersListWrapper}>
                {folderStore.getFolders().map(folder =>
                    <li key={folder.folderId} className={styles.folderWrapper}>
                        <Folder {...folder}/>

                        {folder.enableEdit?
                            <div>
                                <RenameFolderButton {...folder} />
                                <DeleteFolderButton {...folder}/>
                            </div>
                        :
                            <></>
                        }
                    </li>
                )}
            </ul>
            <CreateFolderButton/>
        </div>
    )
})