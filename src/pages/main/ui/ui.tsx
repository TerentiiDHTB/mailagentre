import styles from "./ui.module.scss"
import {Header} from "../../../widgets/header/index.ts";

export const Main = () => {
    return (
        <div className={styles.mainWrapper}>
            <Header/>
        </div>
    )
}