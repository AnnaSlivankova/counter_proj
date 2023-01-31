import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from "./Counter";
import {Setter} from "./Setter";

export type ErrorType = 'Incorrect values!' | 'Enter your values and press SET' | '' | null

export type StateType = {
    minValue: number
    maxValue: number
    count: number
    error: ErrorType
}

function App() {
    const [state, setState] = useState<StateType>({minValue: 0, maxValue: 0, count: 0, error: ''})

    const increaseCount = () => {
        if (state.count < state.maxValue) {
            setState({...state, count: state.count + 1, error: ''})
        }
    }

    const resetCount = () => {
        setState({...state, count: state.minValue, error: ''})
    }

    const setMaxValue = (maxValue: number) => {
        if (maxValue <= state.minValue || maxValue === 0) {
            setState({...state, error: "Incorrect values!"})
        } else {
            setState({...state, maxValue, error: "Enter your values and press SET"})
        }
    }

    const setMinValue = (minValue: number) => {
        if (minValue >= state.maxValue || minValue < 0) {
            setState({...state, error: "Incorrect values!"})
        } else {
            setState({...state, minValue, error: "Enter your values and press SET"})
        }
    }

    const setToLocalStorage = () => {
        localStorage.setItem('values', JSON.stringify(state))
        resetCount()
    }

    const getFromLocalStorage = () => {
        let valueAsString = localStorage.getItem('values')
        if (valueAsString) {
            let newValue = JSON.parse(valueAsString)
            setState(newValue)
        }
    }

    useEffect(() => {
        getFromLocalStorage()
    }, [])


    return (
        <div className="App">
            <div className="Wrapper">
                <h1>Simple counter</h1>
                <h3>This is my first project with React/Redux/TS. <br/> I left it here as a memory.</h3>
                <div className="Counter">
                    <Counter state={state} increaseCount={increaseCount} resetCount={resetCount} count={state.count}
                             error={state.error}/>
                    <Setter state={state} setToLocalStorage={setToLocalStorage} setMaxValue={setMaxValue}
                            setMinValue={setMinValue}/>
                </div>
            </div>

        </div>
    );
}

export default App;
