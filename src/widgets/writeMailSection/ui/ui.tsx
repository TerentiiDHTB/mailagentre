import styles from "./ui.module.scss"

export const WriteMailSection = () => {
    return(
        <div className={styles.writeMailSectionWrapper}>
            <label className={styles.inputLabel}>адрес элекектронной почты получателя</label>
            <input type={"email"} className={styles.input}/>
            <label className={styles.inputLabel}>тема письма</label>
            <input className={styles.input}/>
            <textarea placeholder="введите текст вашего письма" className={styles.mailTextField}/>
            <div>
                <button className={styles.actionButton}>отправь меня папочка</button>
                <button className={styles.actionButton}>добавить в черновик</button>
            </div>
        </div>
    )
}