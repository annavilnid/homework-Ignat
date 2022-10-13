import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            if (action.payload === 'up') {
                state = state.map(i => ({...i})).sort((a, b) => a.name > b.name ? 1 : -1)
            } else {
                state = state.map(i => ({...i})).sort((a, b) => a.name < b.name ? 1 : -1)
            }
            return state // need to fix
        }
        case 'check': {
            state = state
                .filter(i => i.age >= action.payload)
            return state // need to fix
        }
        default:
            return state
    }
}
