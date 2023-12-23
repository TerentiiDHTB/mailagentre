import styles from "./ui.module.scss"

import {useEffect, useState} from "react";

export const WriteMailSection = () => {
    useEffect(() => {
        return () => {console.log(receiverMail, msgTheme, msgText)}
    }, [])

    const [receiverMail, setReceiverMail] = useState("")
    const [msgTheme, setMsgTheme] = useState("")
    const [msgText, setMsgText] = useState("")

    return(
        <div className={styles.writeMailSectionWrapper}>
            <label className={styles.inputLabel}>адрес элекектронной почты получателя</label>
            <input
                type={"email"}
                value={receiverMail}
                onChange={event => {setReceiverMail(event.target.value)}}
                className={styles.input}
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
                className={styles.mailTextField}/>
            <div>
                <button className={styles.actionButton}>отправь меня папочка</button>
                <button className={styles.actionButton}>добавить в черновик</button>
            </div>
        </div>
    )
}