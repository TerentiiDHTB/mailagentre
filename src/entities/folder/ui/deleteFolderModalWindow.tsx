import {ModalWindowTemplate, CallModalWindowProps} from "@/shared/modalWindowTemplate";
import {folderStore} from "@/shared/stores/folderStore/folderStore.ts";

export const DeleteFolderModalWindow = (props: CallModalWindowProps & {folderName: string, folderId: string}) => {
    return (
        <ModalWindowTemplate windowName={"Удаление папки"} isShown={props.isShown} hide={props.hide}>
            <label>вы уверены что хотите удалить папку {props.folderName}?</label>
            <button onClick={() => {folderStore.deleteFolder(props.folderId)}}>ес.</button>
            <button onClick={props.hide}>nope</button>
        </ModalWindowTemplate>
    )
}