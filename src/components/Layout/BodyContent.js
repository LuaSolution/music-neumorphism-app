import React, {useContext} from "react";
import styled from "styled-components";
import {MyContext} from "../../Context/ThemeContext";

export default function BodyContent({children}) {
    const {theme} = useContext(MyContext)
    return <Body theme={theme}>
        {children}
    </Body>
}

const Body = styled.div`
    min-height: 100vh;
    transition: 0.5s all;
    background: ${({theme}) => theme.darkMode ? theme.backgroundDark : theme.backgroundLight};
    padding-top: 39px;
    padding-bottom: 39px;
`