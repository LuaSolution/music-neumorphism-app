import React, {useState} from 'react'
import styled from "styled-components";
import WaveCircle from '../../../assets/img/wave-circle.png';
import WaveLine from '../../../assets/img/wave-circle.png';
import volumeFull from '../../../assets/img/volume_full.svg';
import {Dropdown, Menu, Slider} from "antd";

export default function HeaderLiveMusic() {
    const [value, setValue] = useState(30)

    const menu = (
        <div style={{ width: 400, height: 40, backgroundColor: '#ffffff' }}>
            <Slider defaultValue={value} onChange={(value) => setValue(value)} />
        </div>
    );

    return <div>
        <HeaderTitle1>Play list “Top 100”</HeaderTitle1>
        <NameMusic>Mấy nhịp cầu tre</NameMusic>
        <AuthorMusic>Hoàng Thi Thơ</AuthorMusic>
        <BoxWaveCircle>
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
    </div>
}

const HeaderTitle1 = styled.div`
    color: #B4B5B8;
    font-size: 16px;
    font-family: Montserrat-Regular;
    text-align: center;
    margin-bottom: 32px;
`

const NameMusic = styled.div`
    color: #FFFFFF;
    font-size: 22px;
    font-family: Montserrat-Regular;
    text-align: center;
    margin-bottom: 16px;
`

const AuthorMusic = styled.div`
    color: #EBECF0;
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
    color: #8B68CD;
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