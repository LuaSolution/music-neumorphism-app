import styled from "styled-components";
import {useContext} from "react";
import {MyContext} from "../../Context/ThemeContext";

export default function BodyContent({children}) {
    const {theme} = useContext(MyContext)
    return <Body theme={theme}>
        {children}
    </Body>
}

const Body = styled.div`
    min-height: 100vh;
    background-color: ${({theme}) => {
        console.log(theme, 9999);
        return 'red'
}}
`