import React, {ChangeEvent} from 'react';
import {ButtonUni} from "./ButtonUni";
import {StateType} from "./App";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./store/store";
import {changeMaxValueAC, changeMinValueAC, resetCountAC, setChosenValuesAC} from "./store/app-reducer";

export const Setter = () => {
    let setter = useSelector<AppRootStateType, StateType>(state => state.app)
    const dispatch = useDispatch()

    const setMaxValue = (maxValue: number) => {
        dispatch(changeMaxValueAC(maxValue))
    }
    const setMinValue = (minValue: number) => {
        dispatch(changeMinValueAC(minValue))
    }
    const setChosenValues = () => {
        dispatch(setChosenValuesAC())
        dispatch(resetCountAC())
    }

    const onChangeMaxCountHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setMaxValue(+e.currentTarget.value)
    }
    const onChangeMinCountHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setMinValue(+e.currentTarget.value)
    }

    return (
        <div>
            <div className="display">
                <div className="counterSet">
                    <div className="counter">
                        max: <input className='input' type='number' onChange={onChangeMaxCountHandler}/>
                        min: <input className='input' type='number' onChange={onChangeMinCountHandler}/>
                    </div>
                    <ButtonUni disabled={setter.error === 'Incorrect values!'  || setter.minValue > setter.maxValue || setter.minValue < 0} callback={setChosenValues}>set</ButtonUni>
                </div>
            </div>
        </div>
    );
};
