import React, { useContext, useState } from "react";
import { MyContext } from "../Context/ThemeContext";
import styled from "styled-components";
import { Modal } from "antd";
import Flex from "./Common/Flex";
import Text from "./Common/Text";
import DetailMusic from "./Home/DetailMusic";
import ListMusic from "./Home/ListMusic";
import { Switch } from 'antd';
import iconSetting from '../assets/img/icon-setting.svg'
import iconClose from '../assets/img/icon-close.svg'
import './home.scss'

export default function Home() {
    const { theme, changeTheme } = useContext(MyContext)
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    return (
        <>
            <CircleMiddle theme={theme}>
                <Flex justifyContent='space-between' width={'869px'} margin={'auto'} position={'relative'}>
                    <DetailMusic />
                    <ListMusic />
                    <ButtonSetting theme={theme} onClick={() => showModal()}><img src={iconSetting} alt={""} /></ButtonSetting>
                </Flex>
            </CircleMiddle>
            <Modal
                closable={false}
                title={''}
                footer={false}
                visible={isModalVisible}
                onOk={handleOk} onCancel={handleCancel}
            >
                <BoxModalSetting theme={theme}>
                    <Text color={theme.darkMode ? "#B4B5B8" : '#797A80'} textAlign={'center'} fontSize={'20px'}>Thiết lập hiển thị</Text>
                    <Flex justifyContent="center" margin={'auto'} alignItems="center" height={'145px'}>
                        <Text color={theme.darkMode ? "#B4B5B8" : '#37373C'} fontSize={'16px'} margin={"0 16px 0 0"}>Dark mode</Text>
                        <div><Switch className="switch-change-theme" defaultChecked={!theme.darkMode} onChange={() => changeTheme()} /></div>
                        <Text color={theme.darkMode ? "#B4B5B8" : '#37373C'} fontSize={'16px'} margin={"0 0 0 16px"}>Light mode</Text>
                    </Flex>
                    <CloseIcon onClick={() => handleCancel()}><img src={iconClose} alt={"close-icon"} /></CloseIcon>
                </BoxModalSetting>
            </Modal>
        </>
    )
}

const CircleMiddle = styled.div`
    background: ${({ theme }) => theme.darkMode ? theme.backgroundCircleDark : theme.backgroundCircleLight};
    box-shadow: ${({ theme }) => theme.darkMode ? 'inset 10px 10px 10px rgba(0, 0, 0, 0.25), inset -10px -10px 20px rgba(70, 104, 103, 0.8)' : 'unset'};
    width: 946px;
    height: 946px;
    margin: auto;
    border-radius: 50%;
    backdrop-filter: ${({ theme }) => theme.darkMode ? 'blur(0)' : 'blur(30px)'};
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 46px 38px;
    
    @media (max-width: 1100px){
        height: auto;
        width: 100%;
    }
`

const ButtonSetting = styled.button`
    width: 87px;
    height: 90px;
    background: ${({ theme }) => theme.darkMode ? theme.backgroundIconSettingDark : theme.backgroundIconSettingLight};
    box-shadow: ${({ theme }) => theme.darkMode ? '10px 10px 30px #2E222E' : '10px 10px 30px #888888'};
    border-radius: 15px;
    border: 0;
    outline: 0;
    position: absolute;
    bottom: 107px;
    right: -87px;
    cursor: pointer;
    
    @media (max-width: 1100px){
        position: fixed;
        top: 0;
        right: 0;
        z-index: 1111;
    }
`

const BoxModalSetting = styled.div`
    width: 100%;
    height: 253px;
    padding: 27px;
    background: ${({ theme }) => theme.darkMode ? theme.backgroundSettingDark : theme.backgroundSettingLight};
    box-shadow: 10px 10px 40px #2E232F;
    border-radius: 30px;
    position: relative;
`

const CloseIcon = styled.div`
    background: #261E26;
    box-shadow: 3px 5px 6px -1px rgba(39, 26, 44, 0.97);
    width: 37px;
    height: 37px;
    color: #797A80;
    font-size: 20px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 15px;
    right: 18px;
    cursor: pointer;
`