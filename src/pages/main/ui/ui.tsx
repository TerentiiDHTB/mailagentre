import styles from "./ui.module.scss"
import {Header} from "@/widgets/header/index.ts";
import {Footer} from "@/widgets/footer";
import {MailsSection} from "@/widgets/mailsSection/ui/ui.tsx";
import {FoldersSection} from "@/widgets/foldersSection";

export const Main = () => {
    return (
        <div className={styles.mainWrapper}>
            <Header/>
            <FoldersSection/>
            <MailsSection/>
            <Footer/>
        </div>
    )
}