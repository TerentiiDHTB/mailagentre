import styles from "./ui.module.scss"

import {FolderT} from "@/shared/types";

import {clickHandler} from "../model/clickHandler.ts";
import {mainPageStore} from "@/shared/stores/mainPageStateStore/mainPageStore.ts";
import {MailsSectionState} from "@/shared/enums/mailsSectionState.ts";

export const Folder = (props: FolderT) => {
    return(
        <div className={styles.folderWrapper}>
            <button
                onClick={() => {
                    mainPageStore.setCurrentSection(MailsSectionState.Mails)
                    clickHandler(props.folderId)
                }}
                className={styles.folderName}>
                {props.folderName}
            </button>
        </div>
    )
}