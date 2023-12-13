import styles from "./ui.module.scss"
import {Header} from "@/widgets/header";
import {Footer} from "@/widgets/footer";
import {MailsSection} from "@/widgets/mailsSection";
import {FoldersSection} from "@/widgets/foldersSection";

export const Main = () => {
    return (
        <div className={styles.mainWrapper}>
            <Header/>
            <div className={styles.mainBody}>
                <FoldersSection/>
                <MailsSection/>
            </div>
            <Footer/>
        </div>
    )
}