import {FunctionComponent} from "react";

import styles from "./ui.module.scss"

import {MailT} from "@/shared/types";

import checkedMail from "@/shared/assets/icons/mailStatus/checked-mail-img.svg"
import uncheckedMail from "@/shared/assets/icons/mailStatus/unchecked-mail-img.svg"

import {mailStore} from "@/shared/stores/mailStore/mailStore.ts";

export const Mail: FunctionComponent<MailT> = (props: MailT) => {
    return(
        <div className={styles.mailWrapper}>
            <input
                type="checkbox"
                onClick={() => {mailStore.toggleSelectStatus(props.id)}}
                defaultChecked={props.chosen}
                className={styles.mailCheckbox}
            />
            <img
                src={props.checked? checkedMail: uncheckedMail}
                onClick={() => {mailStore.toggleCheckStatus(props.id)}}
                alt="mailcheckstatus"
                className={styles.checkStatusImg}
            />
            <div className={styles.senderName}>{props.senderName}</div>
            <div className={styles.mailText}>{props.text}</div>
            <div className={styles.mailDate}>{props.date}</div>
        </div>
    )
}