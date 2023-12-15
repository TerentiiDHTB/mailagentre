import {CallModalWindowProps, ModalWindowTemplate} from "@/shared/modalWindowTemplate";

import {folderStore} from "@/shared/stores/folderStore/folderStore.ts";
import {mailStore} from "@/shared/stores/mailStore/mailStore.ts";


export const ChangeFolderModalWindow = (props: CallModalWindowProps) => {
    return(
        <ModalWindowTemplate windowName={props.windowName} isShown={props.isShown} hide={props.hide}>
            <ul>
                {folderStore.getFolders().map(folder =>
                folderStore.getCurrentFolderId() !== folder.folderId
                    ?<li
                        key={folder.folderId}
                        onClick={() => {mailStore.switchMailsFolder(folder.folderId); props.hide()}}
                    >
                        {folder.folderName}
                    </li>

                    :<></>
                )}
            </ul>
        </ModalWindowTemplate>
    )
}