export type StateType = {
    themeId: number
}

export type ActionStateType = {
    id: number
    type: 'SET_THEME_ID'
}


const initState = {
    themeId: 1,
}

export const themeReducer = (state = initState, action: ActionStateType): StateType => { // fix any
    switch (action.type) {
        // дописать
            case 'SET_THEME_ID':
                return {themeId: action.id}
        default:
            return state
    }
}

export const onChange = (id: number): ActionStateType => ({type: 'SET_THEME_ID', id}) // fix any

