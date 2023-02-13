import {StateType} from "../App";
import {AppReducer} from "./app-reducer";

let startState: StateType
beforeEach(() => {
    startState = {minValue: 0, maxValue: 0, count: 0, error: ''}
})

// test('max-value should be changed on set-value', () => {
//         const endState = AppReducer(startState, changeMaxValueAC(10))
//
//         expect(endState.maxValue).toBe(10)
//         expect(startState.maxValue).toBe(0)
//     }
// )


