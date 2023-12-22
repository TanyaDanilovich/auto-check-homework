import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: any, action: any): any => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            // sort() создаёт новый массив? или нужно в ручную?...
            return action.payload === "up"
                ? [...state].sort((a, b) => a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1)
                : [...state].sort((a, b) => a.name.toLowerCase() < b.name.toLowerCase() ? 1 : -1)
        }
        case 'check': {
            // filter() создаёт новый массив? или нужно в ручную?...
            return [...state].filter(user => user.age >= action.payload)
        }
        default:
            return state
    }
}
