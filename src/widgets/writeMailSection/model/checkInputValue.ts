import {ERROR_STATUS} from "@/widgets/writeMailSection/model/errorEnums.ts";

const MAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu

export const CheckInputValue =  (mail: string, text: string): ERROR_STATUS => {
    if (!MAIL_REGEXP.test(mail)){return (ERROR_STATUS.MAIL_ERROR)}
    else if (text.length === 0){return (ERROR_STATUS.TEXT_ERROR)}

    return (ERROR_STATUS.NO_ERRORS)
}