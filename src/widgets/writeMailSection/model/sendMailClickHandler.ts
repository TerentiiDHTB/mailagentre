import {CheckInputValue} from "@/widgets/writeMailSection/model/checkInputValue.ts";
import {mailStore} from "@/shared/stores/mailStore/mailStore.ts";
import {ERROR_STATUS} from "@/widgets/writeMailSection/model/errorEnums.ts";

export const SendMailClickHandler = (mail: string, text: string): Promise<number> => {
    return new Promise((resolve, reject) => {
        const check_result = CheckInputValue(mail, text)
        if (check_result === ERROR_STATUS.NO_ERRORS){
            mailStore.addMail(mail, text)
            resolve(check_result)
        }
        else {
            reject(check_result)
        }
    })
}