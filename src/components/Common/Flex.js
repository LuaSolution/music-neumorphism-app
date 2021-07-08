import styled from "styled-components";

export default function Flex(props) {
    const justifyContent = props?.justifyContent || 'flex-start'
    return <FlexRow justifyContent={justifyContent}>

    </FlexRow>
}

const FlexRow = styled.div`
    display: flex;
    justify-content: ${({justifyContent}) => justifyContent}
    
`