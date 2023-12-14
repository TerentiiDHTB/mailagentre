import React from "react";

export interface CreateModalWindowProps extends CallModalWindowProps{
    children: React.ReactNode
}

export type CallModalWindowProps = {
    windowName: string,
    isShown: boolean,
    hide: () => void
}