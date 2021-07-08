import React, {useState} from "react";

export const MyContext = React.createContext()

const colorDefault = {
    darkMode: true,
    backgroundDark: 'linear-gradient(166.35deg, #646A6E 0%, #2B1F2B 99.67%)',
    backgroundLight: 'linear-gradient(90deg, #E3E7EB 0%, #A0A1AC 100%)',
    backgroundCircleDark: 'linear-gradient(140.17deg, #3A313A 16.43%, #423742 85.15%)',
    backgroundCircleLight: 'linear-gradient(90deg, #BBDCE2 0%, #9F8EBC 100%)',
    backgroundSettingDark: 'linear-gradient(107.99deg, #4B5059 1.97%, #372F39 96.48%)',
    backgroundSettingLight: 'linear-gradient(107.99deg, #E0E4E8 1.97%, #A2A3AE 96.48%);',
    backgroundIconSettingDark: 'linear-gradient(0deg, rgba(38, 30, 38, 0.8), rgba(38, 30, 38, 0.8));',
    backgroundIconSettingLight: 'linear-gradient(107.99deg, #E0E4E8 1.97%, #A2A3AE 96.48%);',
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