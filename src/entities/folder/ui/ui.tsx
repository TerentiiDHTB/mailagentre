import styles from "./ui.module.scss"

import {FolderT} from "@/shared/types";
import {clickHandler} from "../model/folderNameClickHandler.ts";

import {clickHandler as delBtnClickHandler} from "../model/deleteFolderClickHandler.ts"

import deleteIcon from "@/shared/icons/trashcan-img.svg"


export const Folder = (props: FolderT) => {
    return(
        <div className={styles.folderWrapper}>
            <button
                onClick={(event) => {clickHandler(event, props.folderId)}}
                className={styles.folderName}>
                {props.folderName}
            </button>
            {props.enableEdit? <img src={deleteIcon} alt={"deletefolder"} onClick={() => {delBtnClickHandler(props.folderId)}} className={styles.deleteFolder}/> :null}
        </div>
    )
}