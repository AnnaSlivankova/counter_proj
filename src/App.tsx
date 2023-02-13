import React from 'react';
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
    return (
        <div className="App">
            <div className="Wrapper">
                <h1>Simple counter</h1>
                <h3>This is my first project with React/Redux/TS. <br/> I left it here as a memory.</h3>
                <div className="Counter">
                    <Counter/>
                    <Setter/>
                </div>
            </div>

        </div>
    );
}

export default App;
