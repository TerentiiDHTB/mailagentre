import styles from "./ui.module.scss"

import {useState} from "react";

import {SendMailClickHandler} from "@/widgets/writeMailSection/model/sendMailClickHandler.ts";
import {mainPageStore} from "@/shared/stores/mainPageStateStore/mainPageStore.ts";
import {MailsSectionState} from "@/shared/enums/mailsSectionState.ts";
import {ERROR_STATUS} from "@/widgets/writeMailSection/model/errorEnums.ts";

export const WriteMailSection = () => {
    const [receiverMail, setReceiverMail] = useState("")
    const [msgTheme, setMsgTheme] = useState("")
    const [msgText, setMsgText] = useState("")

    const [errorStatus, setErrorStatus] = useState(ERROR_STATUS.NO_ERRORS)

    return(
        <div className={styles.writeMailSectionWrapper}>
            <label className={styles.inputLabel}>адрес элекектронной почты получателя</label>
            <input
                type={"email"}
                value={receiverMail}
                onChange={event => {setReceiverMail(event.target.value)}}
                className={`${styles.input} ${errorStatus === ERROR_STATUS.MAIL_ERROR && styles.inputError}`}
            />
            <label className={styles.inputLabel}>тема письма</label>
            <input
                value={msgTheme}
                onChange={event => {setMsgTheme(event.target.value)}}
                className={styles.input}
            />
            <textarea
                value={msgText}
                onChange={event => {setMsgText(event.target.value)}}
                placeholder="введите текст вашего письма"
                className={`${styles.mailTextField} ${errorStatus === ERROR_STATUS.TEXT_ERROR && styles.inputError}`}/>
            <div>
                <button
                    onClick={() => {
                        SendMailClickHandler(receiverMail, msgText)
                            .then(() => {mainPageStore.setCurrentSection(MailsSectionState.Mails)})
                            .catch((err) => {
                                setErrorStatus(err)
                            })
                    }
                }
                    className={styles.actionButton}
                >
                    отправь меня папочка
                </button>
                <button className={styles.actionButton}>добавить в черновик</button>
            </div>
        </div>
    )
}