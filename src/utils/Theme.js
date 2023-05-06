import { createContext, useReducer } from "react";

export const ThemeContext = createContext('dark')
export const ThemeDispatchContext = createContext(null)
const initialTheme = 'dark'
function themeReducer(state,action){
    switch(action.type){
        case 'dark':{
            return 'dark'
        }
        case 'light':{
            return 'light'
        }
        default:{
            return 'dark'
        }
    }
}
export function ThemeProvider({children}){
    const [theme,dispatch] = useReducer(themeReducer,initialTheme)
    return <ThemeContext.Provider value={theme}>
        <ThemeDispatchContext.Provider value={dispatch}>
            {children}
        </ThemeDispatchContext.Provider>
    </ThemeContext.Provider>
}
