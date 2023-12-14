import {ModalWindowTemplate, CallModalWindowProps} from "@/shared/modalWindowTemplate";
import {clickHandler} from "@/features/deleteFolderButton/model/clickHandler.ts";

import {FolderT} from "@/shared/types";

export const DeleteFolderModalWindow = (props: CallModalWindowProps & FolderT) => {
    return (
        <ModalWindowTemplate windowName={"удаление папки"} isShown={props.isShown} hide={props.hide}>
            <label>вы уверены что хотите удалить папку {props.folderName}?</label>
            <button onClick={() => {clickHandler(props.folderId)}}>ес.</button>
            <button onClick={props.hide}>nope</button>
        </ModalWindowTemplate>
    )
}