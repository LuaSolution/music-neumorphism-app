import {useCallback, useState} from "react";

export const useThemes = () => {
    const [theme, setTheme] = useState({darkMode: false})

    const changeTheme = useCallback(() => {
        setTheme({darkMode: !theme.darkMode})
    }, [theme.darkMode])

    return [theme, changeTheme];
}