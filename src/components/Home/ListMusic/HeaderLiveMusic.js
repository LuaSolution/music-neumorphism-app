import React, {useContext, useState} from 'react'
import styled from "styled-components";
import WaveCircle from '../../../assets/img/wave-circle.png';
import WaveLine from '../../../assets/img/wave-line.png';
import volumeFull from '../../../assets/img/volume_full.svg';
import minusIcon from '../../../assets/img/minus.png';
import plusIcon from '../../../assets/img/plus.png';
import arrowLeft from '../../../assets/img/arrow-left.svg';
import arrowRight from '../../../assets/img/arrow-right.svg';
import {Dropdown, Slider} from "antd";
import {MyContext} from "../../../Context/ThemeContext";

export default function HeaderLiveMusic() {
    const [value, setValue] = useState(30)
    const [numberVolume, setNumberVolume] = useState(59)
    const { theme } = useContext(MyContext)

    const menu = (
        <div style={{ width: 400, height: 40, backgroundColor: '#ffffff' }}>
            <Slider defaultValue={value} onChange={(value) => setValue(value)} />
        </div>
    );

    return <div>
        <HeaderTitle1 theme={theme}>Play list “Top 100”</HeaderTitle1>
        <NameMusic theme={theme}>Mấy nhịp cầu tre</NameMusic>
        <AuthorMusic theme={theme}>Hoàng Thi Thơ</AuthorMusic>
        <BoxWaveCircle >
            <img src={WaveCircle} alt=""/>
            <ItemBoxVolume>
                <BgNumberVolume>
                    <Dropdown overlay={menu} placement="topCenter" arrow>
                        <BoxNumberVolume>{value}%</BoxNumberVolume>
                    </Dropdown>
                </BgNumberVolume>
                <BoxVolume><img src={volumeFull} alt=""/></BoxVolume>
            </ItemBoxVolume>
        </BoxWaveCircle>
        <BoxLineWaveTime>
            <TimeLabel theme={theme}>02:23</TimeLabel>
            <ImageWave><img src={WaveLine} alt=""/></ImageWave>
            <TimeLabel theme={theme}>05:00</TimeLabel>
        </BoxLineWaveTime>
        <BoxIconVolume>
            <IconVolume><img src={minusIcon} alt={""}/></IconVolume>
            <BoxNumberTotal>
                <NumberTotal>59</NumberTotal>
            </BoxNumberTotal>
            <IconVolume><img src={plusIcon} alt={""}/></IconVolume>
        </BoxIconVolume>
        <BoxIconVolume>
            <IconArrow onClick={() => {
                if(numberVolume < 0) return;
                setNumberVolume(-1)
            }}><img src={arrowLeft} alt={""}/></IconArrow>
            <BoxPlayIcon>
                <IconPlay>{numberVolume}</IconPlay>
            </BoxPlayIcon>
            <IconArrow onClick={() => {
                if(numberVolume > 100) return;
                setNumberVolume(+1)
            }}><img src={arrowRight} alt={""}/></IconArrow>
        </BoxIconVolume>
    </div>
}

const HeaderTitle1 = styled.div`
    color: ${({theme}) => theme.darkMode ? '#B4B5B8' : '#5E5E67'};;
    font-size: 16px;
    font-family: Montserrat-Regular;
    text-align: center;
    margin-bottom: 32px;
`

const NameMusic = styled.div`
    color: ${({theme}) => theme.darkMode ? '#FFFFFF' : '#37373C'};
    font-size: 22px;
    font-family: Montserrat-Regular;
    text-align: center;
    margin-bottom: 16px;
`

const AuthorMusic = styled.div`
    color: ${({theme}) => theme.darkMode ? '#EBECF0' : '#5E5E67'};
    font-size: 16px;
    font-family: Montserrat-Regular;
    text-align: center;
`

const BoxWaveCircle = styled.div`
    position: relative;
    text-align: center;
`

const ItemBoxVolume = styled.div`
    position: absolute;
    top: 50%;
    right: 20px;
    transform: translateY(-50%);
`

const BgNumberVolume = styled.div`
    width: 44px;
    height: 44px;
    border-radius: 50%;
    background: linear-gradient(140.17deg, #3A313A 16.43%, #423742 85.15%);
    padding: 2px;
    margin-bottom: 8px;
`

const BoxNumberVolume = styled.div`
    color: ${({theme}) => theme.darkMode ? '#8B68CD' : '#797A80'};;
    font-family: Montserrat-Regular;
    background-color: #3d343d;
    border-radius: 50%;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
`

const BoxVolume = styled.div`
`
const BoxLineWaveTime = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 35px;
    padding-right: 35px;
`
const TimeLabel = styled.div`
    color: #797A80;
    font-size: 16px;
    font-family: Montserrat-Regular;
    font-weight: bold;
`

const ImageWave = styled.div`
`

const BoxIconVolume = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 25px;
`

const IconVolume = styled.div`
    background: #261E26;
    box-shadow: 5px 7px 10px -1px rgba(39, 26, 44, 0.97);
    width: 36px;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    cursor: pointer;
    position: relative;
    
    &::after {
        content: " ";
        width: 100%;
        box-shadow: -5px -5px 10px 0px rgb(70 104 103 / 61%);
        height: 100%;
        position: absolute;
        border-radius: 50%;
    }
`

const BoxNumberTotal = styled.div`
    background: linear-gradient(140.17deg, #251b25 16.43%, #423742 85.15%);
    width: 49px;
    height: 49px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    margin-left: 32px;
    margin-right: 32px;
    padding: 2px;
`

const NumberTotal = styled.div`
    background-color: #3e343e;
    border-radius: 50%;
    width: 100%;
    height: 100%;
    color: #4B9AA5;
    font-size: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
`

const IconArrow = styled.div`
    background: #261E26;
    box-shadow: 5px 7px 10px -1px rgba(39, 26, 44, 0.97);
    width: 56px;
    height: 56px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    cursor: pointer;
    position: relative;
    
    &::after {
        content: " ";
        width: 100%;
        box-shadow: -5px -5px 10px 0px rgb(70 104 103 / 61%);
        height: 100%;
        position: absolute;
        border-radius: 50%;
    }
`


const BoxPlayIcon = styled.div`
    background: linear-gradient(140.17deg, #251b25 16.43%, #423742 85.15%);
    width: 77px;
    height: 77px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    margin-left: 32px;
    margin-right: 32px;
    padding: 2px;
`

const IconPlay = styled.div`
    background: #261E26;
    box-shadow: 5px 7px 10px -1px rgba(39, 26, 44, 0.97);
    border-radius: 50%;
    width: 100%;
    height: 100%;
    color: #4B9AA5;
    font-size: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    position: relative;
    
    &::after {
        content: " ";
        width: 100%;
        box-shadow: -5px -5px 10px 0px rgb(70 104 103 / 61%);
        height: 100%;
        position: absolute;
        border-radius: 50%;
    }
`
