import styles from "@/shared/styles/folderManagementButton.module.scss"

import {ManageMailsButtonType} from "@/shared/types";
import {useModal} from "@/shared/modalWindowTemplate";

import {mailStore} from "@/shared/stores/mailStore/mailStore.ts";
import {folderStore} from "@/shared/stores/folderStore/folderStore.ts";
import {DeleteMailsModalWindow} from "@/features/deleteMailsButton/ui/deleteMailsModalWindow.tsx";

export const DeleteMailsButton = (props: ManageMailsButtonType) => {
    const [isShown, toggle] = useModal()

    return (
        <>
            <button
                disabled={props.isDisabled}
                className={styles.buttonWrapper}
                onClick={toggle}
            >
                Удалить
            </button>
            <DeleteMailsModalWindow
                windowName={"удаление писем"}
                isShown={isShown} hide={toggle}
                onPerform={() => {mailStore.deleteMails(folderStore.getCurrentFolder())}}
            />
        </>
    )
}