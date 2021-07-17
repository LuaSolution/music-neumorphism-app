import styled from "styled-components";

const Flex = styled.div`
    display: flex;
    justify-content: ${({justifyContent}) => justifyContent ? justifyContent : 'flex-start'};
    align-items: ${({alignItems}) => alignItems ? alignItems : 'flex-start'};
    width: ${({width}) => `${width ? width : 'auto'}`};
    height: ${({height}) => `${height ? height : 'auto'}`};
    min-width: ${({minWidth}) => `${minWidth ? minWidth : 'auto'}`};
    min-height: ${({minHeight}) => `${minHeight ? minHeight : 'auto'}`};
    max-width: ${({maxWidth}) => `${maxWidth ? maxWidth : 'auto'}`};
    max-height: ${({maxHeight}) => `${maxHeight ? maxHeight : 'auto'}`};
    margin:  ${({margin}) => `${margin ? margin : '0'}`};
    padding:  ${({padding}) => `${padding ? padding : '0'}`};
    position:  ${({position}) => `${position ? position : 'unset'}`};
    
    @media (max-width: 1100px){
        flex-wrap: wrap;
    }
`
export default Flex;