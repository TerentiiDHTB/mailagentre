import renameIcon from "@/shared/assets/icons/pencil-img.svg";
import styles from "./ui.module.scss";

import {RenameFolderModalWindow} from "../ui/renameFolderModalWindow.tsx";
import {useModal} from "@/shared/modalWindowTemplate";
import {FolderT} from "@/shared/types";

export const RenameFolderButton = (props: FolderT) => {
    const [isShown, toggle] = useModal()

    return(
        <>
            <img src={renameIcon} alt="renamefolder" onClick={toggle} className={styles.renameFolder}/>
            <RenameFolderModalWindow
                windowName={"переименовать папочку"}
                isShown={isShown}
                hide={toggle}
                {...props}
            />
        </>
    )
}