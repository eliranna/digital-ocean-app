import React, {useState, useRef, useEffect} from 'react'
import styled from "styled-components/macro"

const Wrapper = styled.div`
    background: gray;
    position: absolute;
    cursor:pointer;
    width: ${props => props.width ? props.width : '100%'};
    border-radius:10px;
    top: 80px;
    background: white;
    border-radius: 32px;
    box-shadow: 0 0 0 1px rgb(0 0 0 / 4%), 0 8px 16px rgb(0 0 0 / 15%);
    margin-top: 12px;
    padding: 24px 32px;
    display: flex;
    flex-direction: column;
    :before {
        content: "";
        position: absolute;
        bottom: calc(100% - 9px);
        right: 80px;
        height: 20px;
        width: 20px;
        background: white;
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
        border: 1px solid rgb(0 0 0 / 7%);
        border-bottom: 0px;
        border-right: 0px;
    }
`


const BubblePanel = ({children, onClickOutside, show, width}) => {

    const ref = useRef(null);
  
    useEffect(() => {
      const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
          onClickOutside && onClickOutside();
        }
      };
      document.addEventListener('click', handleClickOutside, true);
      return () => {
        document.removeEventListener('click', handleClickOutside, true);
      };
    }, [ onClickOutside ]);
  
    if(!show)
      return null;

    return (
        <Wrapper ref={ref} width={width}>
            {children}
        </Wrapper>
    )

}

export default BubblePanel; 