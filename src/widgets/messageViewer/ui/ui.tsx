import {MailT} from "@/shared/types";

export const MessageViewerSection = (props: MailT) => {
    return (
        <div>
            <div>имя отправителя:{props.senderName}</div>
            <div>дата отправки:{props.date}</div>
            <div>{props.text}</div>
        </div>
    )
}