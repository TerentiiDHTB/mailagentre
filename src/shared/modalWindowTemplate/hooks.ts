import {useState} from "react";

export const useModal = (): [boolean, () => void] => {
    const [isShown, setIsShown] = useState(false)

    const toggleModal = () => {setIsShown(!isShown)}

    return [isShown, toggleModal]
}