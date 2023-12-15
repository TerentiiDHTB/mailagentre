import styles from "@/shared/styles/folderManagementButton.module.scss"
import {ManageMailsButtonType} from "@/shared/types";

export const SwitchFolderButton = (props: ManageMailsButtonType) => {
    return (
        <button
            disabled={props.isDisabled}
            className={styles.buttonWrapper}
        >
            В папку
        </button>)
}