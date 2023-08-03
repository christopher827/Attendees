import React,{useState,useEffect, createContext} from "react";

//This function retrieves a color preference from local storage if any is available
const getInitialTheme=()=>{

//This condition checks whether the window object is defined and whether the browser supports the localStorage API.
if (typeof window!=='undefined' && window.localStorage) {
const storedPrefs=window.localStorage.getItem('color-theme')
if (typeof storedPrefs==='string') {
return storedPrefs
}

/*if there's no color preference stored in the local storage, it then checks whether the user's system preferences 
indicate a preference for a dark color scheme and if so it'll return the string "dark"*/
const userMedia=window.matchMedia('(prefers-color-scheme:dark)')
if (userMedia.matches) {
    return 'dark'
}
}
//if none of both conditions are met, it then returns a light theme by default on the browser
return 'light'
}
export const ThemeContext=createContext()
export const ThemeProvider = ({initialTheme, children}) => {
const [theme, setTheme] = useState(getInitialTheme)

const rawSetTheme = (theme) => {
const root = window.document.documentElement;
const isDark = theme === 'dark'

root.classList.remove(isDark ? 'light' : 'dark')
root.classList.add(theme)

localStorage.setItem('color-theme', theme)
    }
if (initialTheme) {
rawSetTheme(initialTheme)
}
useEffect(()=> {
 rawSetTheme(theme)
    },[theme])

    return (
<ThemeContext.Provider value={{theme,setTheme}}>
    {children}
</ThemeContext.Provider>
    )
}
