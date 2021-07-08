import styled from "styled-components";

const Flex = styled.div`
    font-size: ${({fontSize}) => `${fontSize ? fontSize : 'unset'}`};
    color: ${({color}) => `${color ? color : '#ffffff'}`};
    margin:  ${({margin}) => `${margin ? margin : '0'}`};
    padding:  ${({padding}) => `${padding ? padding : '0'}`};
    text-align:  ${({textAlign}) => `${textAlign ? textAlign : 'left'}`};
    font-family: 'Montserrat-Medium';
    font-weight: ${({fontWeight}) => `${fontWeight ? fontWeight : 'normal'}`};;
`
export default Flex;