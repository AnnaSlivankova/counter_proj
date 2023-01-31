import React from 'react';
import style from './ButtonUni.module.css'

type ButtonUniType = {
    children?: React.ReactNode
    callback: () => void
    disabled?: boolean
    color?: string
}

export const ButtonUni: React.FC<ButtonUniType> = (props) => {
    const {children, callback, disabled, ...rest} = props
    const finalClassName = `${style.button} ${style.default} ${disabled ? style.disabled : ''}`

    const onClickHandler = () => {
        callback()
    }

    return (
        <button className={finalClassName} onClick={onClickHandler}>{children}</button>
    );
};
