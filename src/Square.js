import styled from 'styled-components'
import React from 'react';

export default ({top,left}) => {
    return (<StyledSquare top={top} left={left}/>)
}


const StyledSquare = styled.div`
    height: 10px;
    width: 10px;
    background-color: blue;
    position: absolute;
    top: ${(props) => props.top}px;
    left: ${(props) => props.left}px;
`;