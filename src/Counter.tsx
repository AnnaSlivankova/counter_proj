import React from 'react';
import {ButtonUni} from "./ButtonUni";
import {ErrorType, StateType} from "./App";

type CounterPropsType = {
    state: StateType
    increaseCount: () => void
    resetCount: () => void
    count: number
    error: ErrorType
}

export const Counter = (props: CounterPropsType) => {
    const incCountHandler = () => {
        props.increaseCount()
    }
    const resCountHandler = () => {
        props.resetCount()
    }

    return (
        <div>
            <div className="display">
                <div className="counterSet">
                    <div  className="counter">
                        {props.error ? <div className="error">{props.error}</div> : <div className={props.state.count === props.state.maxValue ? 'error' : ''}>{props.count}</div>}
                    </div>
                    <ButtonUni disabled={props.state.count === props.state.maxValue} callback={incCountHandler}>count</ButtonUni>
                    <ButtonUni disabled={props.state.count === props.state.minValue} callback={resCountHandler}>reset</ButtonUni>
                </div>
            </div>
        </div>
    );
};
