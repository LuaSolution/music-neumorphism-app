import React, {useState} from "react";

export const MyContext = React.createContext()

export const ThemeContext = ({children}) => {
    const [theme, setTheme] = useState({darkMode: false})
    const changeTheme = () => {
        setTheme({darkMode: !theme.darkMode})
    }
    return (
        <MyContext.Provider value={{ theme, changeTheme }}>
            {children}
        </MyContext.Provider>
    )
}