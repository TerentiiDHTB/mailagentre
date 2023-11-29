import styles from "./ui.module.scss"
import {Header} from "@/widgets/header/index.ts";
import {Footer} from "@/widgets/footer";

export const Main = () => {
    return (
        <div className={styles.mainWrapper}>
            <Header/>
            <Footer/>
        </div>
    )
}