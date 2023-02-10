import {StateType} from "../App";

type ChangeMaxValueACType = ReturnType<typeof changeMaxValueAC>
type ChangeMinValueACType = ReturnType<typeof changeMinValueAC>
type ResetCountACType = ReturnType<typeof resetCountAC>
type IncreaseCountACType = ReturnType<typeof increaseCountAC>
type SetChosenValuesACType = ReturnType<typeof setChosenValuesAC>

type ActionTypes = ChangeMaxValueACType
    | ChangeMinValueACType | ResetCountACType
    | IncreaseCountACType | SetChosenValuesACType

const initialState: StateType = {minValue: 0, maxValue: 0, count: 0, error: ''}

export const AppReducer = (state = initialState, action: ActionTypes): StateType => {
    switch (action.type) {
        case 'CHANGE-MAX-VALUE':
            if (action.maxValue <= state.minValue || action.maxValue === 0) return {
                ...state,
                error: "Incorrect values!"
            }; else return {
                ...state,
                maxValue: action.maxValue,
                error: "Enter your values and press SET"
            }
        case 'CHANGE-MIN-VALUE':
            if (action.minValue >= state.maxValue || action.minValue < 0) return {
                ...state,
                error: "Incorrect values!"
            }; else return {
                ...state,
                minValue: action.minValue,
                error: "Enter your values and press SET"
            }
        case 'RESET-COUNT':
            return {
                ...state,
                count: state.minValue,
                error: ''
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
            return {
                ...state,
                maxValue: state.maxValue,
                minValue: state.minValue
            }
        default:
            return state
    }
}

export const changeMaxValueAC = (maxValue: number) => {
    return {
        type: 'CHANGE-MAX-VALUE', maxValue
    } as const
}
export const changeMinValueAC = (minValue: number) => {
    return {
        type: 'CHANGE-MIN-VALUE', minValue
    } as const
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
export const setChosenValuesAC = () => {
    return {
        type: 'SET-CHOSEN-VALUES'
    } as const
}