import React, {useContext} from 'react';
import styled from 'styled-components';
import {MyContext} from "../../Context/ThemeContext";
import HeaderLiveMusic from "./ListMusic/HeaderLiveMusic";

export default function ListMusic(){
    const { theme } = useContext(MyContext)
    return <BoxListMusic theme={theme}>
        <HeaderLiveMusic />
    </BoxListMusic>
}

const BoxListMusic = styled.div`
    background: ${({theme}) => theme.darkMode ? theme.backgroundDark : theme.backgroundLight};
    box-shadow: ${({theme}) => theme.darkMode ? '10px 10px 40px #2E232F;' : '0 0 0 #2E232F;'};
    width: 414px;
    border-radius: 60px;
    min-height: 833px;
    padding-top: 69px;
    
    @media (max-width: 1100px){
        flex-basis: 100%;
        margin-bottom: 40px;
        width: 100%;
    }
`