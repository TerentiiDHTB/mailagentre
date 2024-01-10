import {CallModalWindowProps, ModalWindowTemplate} from "@/shared/modalWindowTemplate";

import {folderStore} from "@/shared/stores/folderStore/folderStore.ts";
import {mailStore} from "@/shared/stores/mailStore/mailStore.ts";

const nonChangableFolders = ["sent", "draft"]

export const ChangeFolderModalWindow = (props: CallModalWindowProps) => {
    return(
        <ModalWindowTemplate windowName={props.windowName} isShown={props.isShown} hide={props.hide}>
            <ul key="folders">
                {folderStore.getFolders().map(folder =>
                    <li
                        key={folder.folderId}
                        onClick={() => {mailStore.switchMailsFolder(folder.folderId); props.hide()}}
                        hidden={[...nonChangableFolders, folderStore.getCurrentFolderId()].includes(folder.folderId)}
                        //если делать через условный рендеринг то выпадает ошибка на ключи. надо разбираться..
                    >
                        {folder.folderName}
                    </li>
                )}
            </ul>
        </ModalWindowTemplate>
    )
}