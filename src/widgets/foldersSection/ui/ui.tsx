import {observer} from "mobx-react-lite";

import styles from "./ui.module.scss"

import {folderStore} from "@/shared/stores/folderStore/folderStore.ts";

import {Folder} from "@/entities/folder/";
import {CreateFolderButton} from "@/features/createFolderButton";
import {WriteMailButton} from "@/features/writeMailButton";
import {DeleteFolderButton} from "@/features/deleteFolderButton";
import {RenameFolderButton} from "@/features/renameFolderButton";
import {WriteMailButtonType} from "@/shared/types/WriteMailButtonType.ts";

export const FoldersSection = observer((props: WriteMailButtonType) => {
    return(
        <div className={styles.foldersSectionWrapper}>
            <WriteMailButton mutateState={props.mutateState}/>
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