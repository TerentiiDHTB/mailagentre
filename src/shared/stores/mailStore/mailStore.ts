import {MailT} from "@/shared/types";

import {makeAutoObservable} from "mobx";

import userMails from "@/shared/startinfo/userMails.json"
import {nanoid} from "nanoid";

const GetCurrentDate = (): string => {
    const date = new Date()
    const day: string = date.getDate() < 10? `0${date.getDate()}`: `${date.getDate()}`
    const month: string = date.getMonth() < 9? `0${date.getMonth()+1}`: `${date.getMonth()+1}`

    return `${day}.${month}.${date.getFullYear()}`
}

class MailStore{
    private mailsList: MailT[] = []

    getMails = (curFolderId: string): MailT[] => {
        return this.mailsList.filter((mail) => mail.folder === curFolderId)
    }

    toggleSelectStatus = (mailId: string): void => {
        this.mailsList.forEach((item) => {
            if (item.id === mailId){
                item.chosen = !item.chosen;
                return
            }
        })
    }

    toggleCheckStatus = (mailId: string) => {
        this.mailsList.forEach((mail) => {
            if (mail.id === mailId){
                mail.checked = !mail.checked;
                return
            }
        })
    }

    addMail = (receiverMail: string, msgText: string): void => {
        this.mailsList.push({
            senderMail: "username@mail.ru",
            senderName: "username",
            receiverMail: receiverMail,
            receiverName: receiverMail.split("@")[0],
            date: GetCurrentDate(),
            folder: "sent",
            checked: false,
            chosen: false,
            text: msgText,
            id: nanoid()
        })
    }

    deleteMails = (folderId: string): void => {
        if (folderId === "deleted"){
            this.mailsList = this.mailsList.filter(mail => !mail.chosen)
            return
        }

        for (const mail of this.mailsList){
            if (mail.chosen){
                mail.folder = "deleted";
                mail.chosen = false
            }
        }
    }

    switchMailsFolder = (newFolderId: string): void => {
        for (const mail of this.mailsList){
            if (mail.chosen){
                mail.folder = newFolderId
                mail.chosen = false
            }
        }
    }

    isMailsChosen = (folderId: string): boolean => {
        for (const mail of this.mailsList){
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
