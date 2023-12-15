import styles from "./ui.module.scss"

import {observer} from "mobx-react-lite";

import {SwitchFolderButton} from "@/features/switchFolderButton";
import {DeleteMailsButton} from "@/features/deleteMailsButton";
import {Mail} from "@/entities/mail";

import {mailStore} from "@/shared/stores/mailStore/mailStore.ts";
import {folderStore} from "@/shared/stores/folderStore/folderStore.ts";


export const MailsSection = observer(() => {
    const isMailChosen = !mailStore.isMailsChosen(folderStore.getCurrentFolder())

    return (
        <div className={styles.mailsWrapper}>
            <section>
                <SwitchFolderButton isDisabled={isMailChosen}/>
                <DeleteMailsButton isDisabled={isMailChosen}/>
            </section>

            <ul className={styles.mailsList}>
                {
                    mailStore.getMails(folderStore.getCurrentFolder()).map((mail) =>
                        <li className={styles.mail} key={mail.id}>
                            <Mail {...mail}/>
                        </li>
                    )}
            </ul>
        </div>)
})