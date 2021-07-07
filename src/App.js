import React, {useState} from "react";
import {ThemeProvider} from "styled-components";
import {Globalstyles} from "./components/Globalstyles";
import {lightTheme, darkTheme} from "./components/Themes"
import Home from "./components/Home";

const App = () => {
    const [theme, setTheme] = useState('light');
    const themeToggler = () => {
        theme === 'light' ? setTheme('dark') : setTheme('light')
    }

    return (
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
            <Globalstyles/>
            <button onClick={themeToggler}>Switch Theme</button>
            <Home />
        </ThemeProvider>

    );
};
export default App;