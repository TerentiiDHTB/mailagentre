import {MailT} from "@/shared/types";

import {makeAutoObservable} from "mobx";

import userMails from "@/shared/startinfo/userMails.json"


class MailStore{
    mailsList: MailT[] = []

    getMails = (cur_folder_id: string): MailT[] => {
        return this.mailsList.filter((mail) => mail.folder === cur_folder_id)
    }

    constructor() {
        userMails.forEach((mail) => this.mailsList.push({...mail, chosen: false}))

        makeAutoObservable(this, {}, {deep: true})
    }
}

export const mailStore: MailStore = new MailStore()
