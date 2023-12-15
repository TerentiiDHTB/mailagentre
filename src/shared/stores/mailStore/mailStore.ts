import {MailT} from "@/shared/types";

import {makeAutoObservable} from "mobx";

import userMails from "@/shared/startinfo/userMails.json"


class MailStore{
    private mailsList: MailT[] = []

    getMails = (cur_folder_id: string): MailT[] => {
        return this.mailsList.filter((mail) => mail.folder === cur_folder_id)
    }

    toggleSelectStatus = (mailId: string): void => {
        this.mailsList.forEach((item) => {
            if (item.id === mailId){
                item.chosen = !item.chosen
                return
            }
        })
    }

    deleteMails = (folderId: string): void => {
        if (folderId === "deleted"){
            this.mailsList = this.mailsList.filter(mail => !mail.chosen)
            return
        }

        for (let mail of this.mailsList){
            if (mail.chosen){
                mail.folder = "deleted";
                mail.chosen = false
            }
        }
    }

    switchMailsFolder = (newFolderId: string): void => {
        for (let mail of this.mailsList){
            if (mail.chosen){
                mail.folder = newFolderId
                mail.chosen = false
            }
        }
    }

    isMailsChosen = (folderId: string): boolean => {
        for (let mail of this.mailsList){
            if (mail.chosen && mail.folder === folderId){
                return true;
            }
        }

        return false
    }

    constructor() {
        userMails.forEach((mail) => this.mailsList.push({...mail, chosen: false}))

        makeAutoObservable(this, {}, {deep: true})
    }
}

export const mailStore: MailStore = new MailStore()
