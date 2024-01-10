import {MailsSectionState} from "@/shared/enums/mailsSectionState.ts";

import {makeAutoObservable} from "mobx";

class MainPageStore{
    private currentSection: MailsSectionState

    getCurrentSection = (): string => this.currentSection

    setCurrentSection = (section: MailsSectionState): void => {
        if (this.currentSection !== section){
            this.currentSection = section
        }
    }

    constructor() {
        this.currentSection = MailsSectionState.Mails

        makeAutoObservable(this)
    }
}

export const mainPageStore = new MainPageStore()