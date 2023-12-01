import styles from "./ui.module.scss"

import {observer} from "mobx-react-lite";

import {SwitchFolderButton} from "@/features/switchFolderButton";
import {DeleteMailsButton} from "@/features/deleteMailsButton";
import {mailStore} from "@/shared/stores/mailStore/mailStore.ts";
import {Mail} from "@/entities/mail/ui/ui.tsx";

export const MailsSection = observer(() => {
    return (
        <div className={styles.mailsWrapper}>
            <section>
                <SwitchFolderButton isDisabled={true}/>
                <DeleteMailsButton/>
            </section>

            <ul className={styles.mailsList}>
                {
                    mailStore.getMails("inbox").map((mail) =>
                        <li className={styles.mail} key={mail.id}>
                            <Mail {...mail}/>
                        </li>
                    )}
            </ul>
        </div>)
})