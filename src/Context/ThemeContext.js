import React, {useState} from "react";

export const MyContext = React.createContext()

const colorDefault = {
    darkMode: true,
    backgroundDark: 'linear-gradient(166.35deg, #646A6E 0%, #2B1F2B 99.67%)',
    backgroundLight: 'linear-gradient(90deg, #E3E7EB 0%, #A0A1AC 100%)',
    backgroundCircleDark: 'linear-gradient(140.17deg, #3A313A 16.43%, #423742 85.15%)',
    backgroundCircleLight: 'linear-gradient(90deg, #BBDCE2 0%, #9F8EBC 100%)',
}

export const ThemeContext = ({children}) => {
    const [theme, setTheme] = useState(colorDefault)
    const changeTheme = () => {
        setTheme({...theme, darkMode: !theme.darkMode})
    }
    return (
        <MyContext.Provider value={{ theme, changeTheme }}>
            {children}
        </MyContext.Provider>
    )
}