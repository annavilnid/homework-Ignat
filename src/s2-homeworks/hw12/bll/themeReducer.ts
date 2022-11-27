const initState = {
    themeId: 1,
}

export type RootState = {
    themeId: number,
}

type ChangeThemeIdActionType = {
    type: 'SET_THEME_ID'
    id: number
}

type ActionType = ChangeThemeIdActionType

export const themeReducer = (state: RootState = initState, action: ActionType): RootState => { // fix any
    console.log('попали в редъюсер')
    switch (action.type) {
        case 'SET_THEME_ID':
            console.log('меняем стейт')
        return  {
                ...state,
                themeId: action.id
            }
        default:
            return state
    }
}

export const changeThemeId = (id: number): ChangeThemeIdActionType => {return { type: 'SET_THEME_ID', id } as const} // fix any
