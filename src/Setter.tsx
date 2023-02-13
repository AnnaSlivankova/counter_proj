import React, {ChangeEvent, useState} from 'react';
import {ButtonUni} from "./ButtonUni";
import {StateType} from "./App";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./store/store";
import {changeValuesErrorAC, resetCountAC, setChosenValuesAC} from "./store/app-reducer";

export const Setter = () => {
    let setter = useSelector<AppRootStateType, StateType>(state => state.app)
    const dispatch = useDispatch()

    const [max, setMax] = useState(0)
    const [min, setMin] = useState(0)

    const setChosenValues = () => {
        dispatch(setChosenValuesAC(max, min))
        dispatch(resetCountAC())
    }
    const onChangeMaxCountHandler = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(changeValuesErrorAC(min, +e.currentTarget.value))
        setMax(+e.currentTarget.value)
    }
    const onChangeMinCountHandler = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(changeValuesErrorAC(+e.currentTarget.value, max))
        setMin(+e.currentTarget.value)
    }


    return (
        <div>
            <div className="display">
                <div className="counterSet">
                    <div className="counter">
                        max: <input className='input' type='number' onChange={onChangeMaxCountHandler}/>
                        min: <input className='input' type='number' onChange={onChangeMinCountHandler}/>
                    </div>
                    <ButtonUni disabled={setter.error === 'Incorrect values!'} callback={setChosenValues}>set</ButtonUni>
                </div>
            </div>
        </div>
    );
};
