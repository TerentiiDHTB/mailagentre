import {FunctionComponent} from "react";
import {Github, Telegram, Envelope} from "react-bootstrap-icons";

import styles from "./ui.module.scss";

export const Footer: FunctionComponent = () => {
    return(
        <div className={styles.footerWrapper}>
            <section className={styles.footerLinkSection}>
                <a href="https://github.com/TerentiiDHTB" target="_blank">
                    <Github width="32px" height="32px" color="black"/>
                </a>
                <a href="https://t.me/TerentiyTerentiev" target="_blank">
                    <Telegram width="32px" height="32px" color="black"/>
                </a>
                <Envelope width="32px" height="32px" color="black"/>
            </section>

            <span>somecopyrightthings©</span>
        </div>
    )
}