import styles from "./ui.module.scss"
import {Header} from "@/widgets/header/index.ts";
import {Footer} from "@/widgets/footer";
import {MailsSection} from "@/widgets/mailsSection/ui/ui.tsx";

export const Main = () => {
    return (
        <div className={styles.mainWrapper}>
            <Header/>

            <MailsSection/>

            <Footer/>
        </div>
    )
}