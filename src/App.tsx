import React from 'react';
import './App.css';
import {Counter} from "./Counter";
import {Setter} from "./Setter";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./store/store";
import {
    changeMaxValueAC,
    changeMinValueAC,
    increaseCountAC,
    resetCountAC,
    setChosenValuesAC
} from "./store/app-reducer";

export type ErrorType = 'Incorrect values!' | 'Enter your values and press SET' | '' | null
export type StateType = {
    minValue: number
    maxValue: number
    count: number
    error: ErrorType
}

function App() {
    let app = useSelector<AppRootStateType, StateType>(state => state.app)
    const dispatch = useDispatch()

    const increaseCount = () => {
        dispatch(increaseCountAC())
    }
    const resetCount = () => {
        dispatch(resetCountAC())
    }
    const setMaxValue = (maxValue: number) => {
        dispatch(changeMaxValueAC(maxValue))
    }
    const setMinValue = (minValue: number) => {
        dispatch(changeMinValueAC(minValue))
    }
    const setChosenValues = () => {
        dispatch(setChosenValuesAC())
        resetCount()
    }

    return (
        <div className="App">
            <div className="Wrapper">
                <h1>Simple counter</h1>
                <h3>This is my first project with React/Redux/TS. <br/> I left it here as a memory.</h3>
                <div className="Counter">
                    <Counter state={app} increaseCount={increaseCount} resetCount={resetCount} count={app.count}
                             error={app.error}/>
                    <Setter state={app} setChosenValues={setChosenValues} setMaxValue={setMaxValue}
                            setMinValue={setMinValue}/>
                </div>
            </div>

        </div>
    );
}

export default App;
