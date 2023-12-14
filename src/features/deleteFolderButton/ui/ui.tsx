import deleteIcon from "@/shared/icons/trashcan-img.svg";
import styles from "./ui.module.scss";

import {useModal} from "@/shared/modalWindowTemplate";
import {DeleteFolderModalWindow} from "@/features/deleteFolderButton/ui/deleteFolderModalWindow.tsx";

import {FolderT} from "@/shared/types";

export const DeleteFolderButton = (props: FolderT) => {
    const [isShown, hide] = useModal()

    return(
        <>
            <img src={deleteIcon} alt="deletefolder" onClick={hide} className={styles.deleteFolder}/>
            <DeleteFolderModalWindow
                windowName={"Удалить папочку"}
                isShown={isShown}
                hide={hide}
                {...props}
            />
        </>
    )
}