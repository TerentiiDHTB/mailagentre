import styles from "./ui.module.scss";

import {MailsSectionState} from "@/shared/enums/mailsSectionState.ts"
import {mainPageStore} from "@/shared/stores/mainPageStateStore/mainPageStore.ts";


export const WriteMailButton = () => {
    return (
        <button
            className={styles.writeMailBtn}
            onClick={() => mainPageStore.setCurrentSection(MailsSectionState.WriteMail)}
        >
            написать письмо
        </button>
    )
}