import {FunctionComponent} from "react";

import styles from "./ui.module.scss"

import {MailT} from "@/shared/types";

import checkedMail from "@/shared/icons/mailStatus/checkedMail/checked-mail-img.svg"
import uncheckedMail from "@/shared/icons/mailStatus/uncheckedMail/unchecked-mail-img.svg"

export const Mail: FunctionComponent<MailT> = (props: MailT) => {
    return(
        <div className={styles.mailWrapper}>
            <input type="checkbox"/>
            <img src={props.checked? checkedMail: uncheckedMail}/>
            <span>{props.senderName}</span>
            <span>{props.text}</span>
            <span>{props.date}</span>
        </div>
    )
}