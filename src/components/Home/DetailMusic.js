import React, {useContext} from 'react';
import {SearchOutlined} from '@ant-design/icons';
import HeaderDetail from './DetailMusic/HeaderDetail';
import styled from 'styled-components';
import {MyContext} from "../../Context/ThemeContext";
import ProgressTimeLine from "./DetailMusic/ProgressTimeLine";
import ListMusicItem from "./DetailMusic/ListMusicItem";

export default function DetailMusic(){
    const { theme } = useContext(MyContext)
    return <BoxDetailMusic theme={theme}>
        <BoxSearch theme={theme}>
            <InputSearch placeholder="Find music" />
            <IconSearch><SearchOutlined /></IconSearch>
        </BoxSearch>
        <HeaderDetail />
        <ProgressTimeLine />
        <ListMusicItem />
    </BoxDetailMusic>
}

const BoxDetailMusic = styled.div`
    background: ${({theme}) => theme.darkMode ? theme.backgroundDark : theme.backgroundLight};
    box-shadow: ${({theme}) => theme.darkMode ? '10px 10px 40px #2E232F;' : '0 0 0 #2E232F;'};
    width: 414px;
    border-radius: 60px;
    min-height: 833px;
    padding-top: 69px;
    
    @media (max-width: 1100px){
        flex-basis: 100%;
        margin-bottom: 40px;
    }
`

const BoxSearch = styled.div`
    max-width: 292px;
    margin: auto;
    background: ${({ theme }) => theme.darkMode ? '#443345' : '#C0CAD2'};
    box-shadow: ${({theme}) => theme.darkMode ? 'inset 5px 6px 5px 1px #462847, inset -5px -6px 8px 1px rgba(70, 104, 103, 0.61);' 
    : 'inset 0px 4px 15px #8F61AD, inset 0px -4px 15px -1px #47B0BE'};
    border-radius: 10px;
    position: relative;
    height: 58px;
`

const InputSearch = styled.input`
    width: 210px;
    height: 100%;
    background: transparent;
    border: 0;
    outline: 0;
    padding-left: 22px;
    color: #ffffff;
    font-size: 16px;
    font-family: Montserrat-Regular;

    &::placeholder{
        color: #797A80;
    }
`

const IconSearch = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 50%;
    right: 29px;
    width: 21px;
    height: 21px;
    transform: translateY(-75%);

    span{
        color: #4AB4C3;;
        font-size: 28px;
    }
`