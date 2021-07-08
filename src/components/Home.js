import React, {useContext, useState} from "react";
import {MyContext} from "../Context/ThemeContext";
import styled from "styled-components";
import {Modal} from "antd";
import Flex from "./Common/Flex";
import DetailMusic from "./Home/DetailMusic";
import ListMusic from "./Home/ListMusic";

export default function Home(){
    const { theme, changeTheme } = useContext(MyContext)
    const [isModalVisible, setIsModalVisible] = useState(false);

    // const showModal = () => {
    //     setIsModalVisible(true);
    // };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    return (
        <>
            <CircleMiddle theme={theme}>
                <Flex>
                    <DetailMusic/>
                    <ListMusic/>
                </Flex>
                <button onClick={() => changeTheme()}>change</button>
            </CircleMiddle>
            <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Modal>
        </>
    )
}

const CircleMiddle = styled.div`
    background: ${({theme}) => theme.darkMode ? theme.backgroundCircleDark : theme.backgroundCircleLight};
    box-shadow: ${({theme}) => theme.darkMode ? 'inset 10px 10px 10px rgba(0, 0, 0, 0.25), inset -10px -10px 20px rgba(70, 104, 103, 0.8)' : 'unset'};
    width: 946px;
    height: 946px;
    margin: auto;
    border-radius: 50%;
    backdrop-filter: ${({theme}) => theme.darkMode ? 'blur(0)' : 'blur(30px)'};
`