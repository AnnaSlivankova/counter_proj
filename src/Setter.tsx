import React, {ChangeEvent, useState} from 'react';
import {ButtonUni} from "./ButtonUni";
import {StateType} from "./App";

type SetterPropsType = {
    state: StateType
    setToLocalStorage: () => void
    setMaxValue: (maxValue: number) => void
    setMinValue: (minValue: number) => void
}

export const Setter = (props: SetterPropsType) => {
    const onChangeMaxCountHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.setMaxValue(+e.currentTarget.value)
    }
    const onChangeMinCountHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.setMinValue(+e.currentTarget.value)
    }

    return (
        <div>
            <div className="display">
                <div className="counterSet">
                    <div className="counter">
                        max: <input className='input' type='number' onChange={onChangeMaxCountHandler}/>
                        min: <input className='input' type='number' onChange={onChangeMinCountHandler}/>
                    </div>
                    <ButtonUni disabled={props.state.error === 'Incorrect values!'} callback={props.setToLocalStorage}>set</ButtonUni>
                </div>
            </div>
        </div>
    );
};
