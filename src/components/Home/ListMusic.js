import React, {useContext} from 'react';
import styled from 'styled-components';
import {MyContext} from "../../Context/ThemeContext";

export default function ListMusic(){
    const { theme } = useContext(MyContext)
    return <BoxListMusic theme={theme}>111</BoxListMusic>
}

const BoxListMusic = styled.div`
    background: ${({theme}) => theme.darkMode ? theme.backgroundDark : theme.backgroundLight};
    box-shadow: ${({theme}) => theme.darkMode ? '10px 10px 40px #2E232F;' : '0 0 0 #2E232F;'};
    width: 414px;
    border-radius: 60px;
    min-height: 833px;
    padding-top: 69px;
`