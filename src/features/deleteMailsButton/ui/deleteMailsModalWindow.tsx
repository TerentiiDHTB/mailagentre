import {CallModalWindowProps, ModalWindowTemplate} from "@/shared/modalWindowTemplate";


export const DeleteMailsModalWindow = (props: CallModalWindowProps & {onPerform: () => void}) => {
    return (
        <ModalWindowTemplate windowName={props.windowName} isShown={props.isShown} hide={props.hide}>
            <label>ар ю шур эбаут зэт?</label>
            <button onClick={() => {props.onPerform(); props.hide();}}>абсолютли</button>
            <button onClick={props.hide}>нет.</button>
        </ModalWindowTemplate>)
}