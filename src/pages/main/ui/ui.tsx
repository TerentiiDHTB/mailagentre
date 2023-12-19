import styles from "./ui.module.scss"

import {Header} from "@/widgets/header";
import {Footer} from "@/widgets/footer";
import {MailsSection} from "@/widgets/mailsSection";
import {FoldersSection} from "@/widgets/foldersSection";
import {WriteMailSection} from "@/widgets/writeMailSection";

import {MailsSectionState} from "@/shared/enums/mailsSectionState.ts";

import {mainPageStore} from "@/shared/stores/mainPageStateStore/mainPageStore.ts"
import {observer} from "mobx-react-lite";

const loadCurrentSection = (currentSection: string) => {
    switch (currentSection) {
        case MailsSectionState.Mails:
            return <MailsSection/>
        case MailsSectionState.WriteMail:
            return <WriteMailSection/>
        case MailsSectionState.ReadMail:
            return <></>
    }
}

export const Main = observer(() => {
    return (
        <div className={styles.mainWrapper}>
            <Header/>
            <div className={styles.mainBody}>
                <FoldersSection/>
                {loadCurrentSection(mainPageStore.getCurrentSection())}
            </div>
            <Footer/>
        </div>
    )
})