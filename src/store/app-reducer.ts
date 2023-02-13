import {StateType} from "../App";

type ResetCountACType = ReturnType<typeof resetCountAC>
type IncreaseCountACType = ReturnType<typeof increaseCountAC>
type SetChosenValuesACType = ReturnType<typeof setChosenValuesAC>
type changeValuesErrorActionType = ReturnType<typeof changeValuesErrorAC>

type ActionTypes = ResetCountACType
    | IncreaseCountACType | SetChosenValuesACType
    | changeValuesErrorActionType

const initialState: StateType = {minValue: 0, maxValue: 0, count: 0, error: 'Enter your values and press SET'}

export const AppReducer = (state = initialState, action: ActionTypes): StateType => {
    switch (action.type) {
        case 'RESET-COUNT':
            return {
                ...state,
                count: state.minValue,
            }
        case 'INCREASE-COUNT':
            if (state.count < state.maxValue) {
                return {
                    ...state,
                    count: state.count + 1,
                    error: ''
                }
            } else return state
        case 'SET-CHOSEN-VALUES':
            if (action.minValue > action.maxValue || action.minValue < 0 || action.minValue === action.maxValue || action.minValue < state.minValue) {
                return {
                    ...state,
                    minValue: 0,
                    maxValue: 0,
                    error: 'Incorrect values!'
                }
            } else
                return {
                    ...state,
                    maxValue: action.maxValue,
                    minValue: action.minValue,
                    error: ''
                }
        case "CHANGE-VALUES-ERROR-MESSAGE":
            if (action.max <= action.min || action.max === 0 || action.min < 0) {
                return {
                    ...state,
                    error: 'Incorrect values!'
                }
            } else
                return {
                    ...state,
                    error: 'Enter your values and press SET'
                }
        default:
            return state
    }
}

export const resetCountAC = () => {
    return {
        type: 'RESET-COUNT'
    } as const
}
export const increaseCountAC = () => {
    return {
        type: 'INCREASE-COUNT'
    } as const
}
export const setChosenValuesAC = (max: number, min: number) => {
    return {
        type: 'SET-CHOSEN-VALUES',
        minValue: min,
        maxValue: max
    } as const
}
export const changeValuesErrorAC = (min: number, max: number) => {
    return {
        type: 'CHANGE-VALUES-ERROR-MESSAGE',
        min,
        max
    } as const
}