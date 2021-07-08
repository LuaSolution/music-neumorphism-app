import React, {useContext} from "react";
import {MyContext} from "../Context/ThemeContext";

export default function Home(){
    const { changeTheme } = useContext(MyContext)

    return (
        <div>
            1111
            <button onClick={() => changeTheme()}>test</button>
        </div>
    )
}