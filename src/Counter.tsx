import React from 'react';
import {ButtonUni} from "./ButtonUni";
import {StateType} from "./App";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./store/store";
import {increaseCountAC, resetCountAC} from "./store/app-reducer";

export const Counter = () => {
    let counter = useSelector<AppRootStateType, StateType>(state => state.app)
    const dispatch = useDispatch()

    const increaseCount = () => {
        dispatch(increaseCountAC())
    }
    const resetCount = () => {
        dispatch(resetCountAC())
    }

    return (
        <div>
            <div className="display">
                <div className="counterSet">
                    <div  className="counter">
                        {counter.error === 'Incorrect values!' || counter.error === 'Enter your values and press SET'? <div className="error">{counter.error}</div> : <div className={counter.count === counter.maxValue ? 'error' : ''}>{counter.count}</div>}
                    </div>
                    <ButtonUni disabled={counter.count === counter.maxValue} callback={increaseCount}>count</ButtonUni>
                    <ButtonUni disabled={counter.count === counter.minValue} callback={resetCount}>reset</ButtonUni>
                </div>
            </div>
        </div>
    );
};
