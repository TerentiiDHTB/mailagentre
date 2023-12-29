import {ERROR_STATUS} from "@/widgets/writeMailSection/model/errorEnums.ts";

const MAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu

export const CheckInputValue = async (mail: string, text: string): Promise<number> => {
    if (MAIL_REGEXP.test(mail)){return ERROR_STATUS.MAIL_ERROR}
    else if (text.length === 0){return ERROR_STATUS.TEXT_ERROR}

    return ERROR_STATUS.NO_ERRORS
}