import styles from "@/shared/styles/folderManagementButton.module.scss"

import {ManageMailsButtonType} from "@/shared/types";

import {useModal} from "@/shared/modalWindowTemplate";
import {ChangeFolderModalWindow} from "./changeFolderModalWindow.tsx";

export const SwitchFolderButton = (props: ManageMailsButtonType) => {
    const [isShown, toggle] = useModal()

    return (
        <>
            <button
                disabled={props.isDisabled}
                className={styles.buttonWrapper}
                onClick={toggle}
            >
                В папку
            </button>
            <ChangeFolderModalWindow windowName={"выберите новую папку"} isShown={isShown} hide={toggle}/>
        </>)
}