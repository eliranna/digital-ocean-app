import React from 'react'
import styled from "styled-components/macro"
import { fontSize } from '../style';

const CheckboxWrapper = styled.div`
  font-size: ${fontSize.fontSize2};
  display: flex;

` 

const CheckboxInput = styled.div`
   input {
    width: 18px;
    height: 18px;
    cursor: pointer;
   }
   margin-top: 1px;
   margin-left: 5px;

` 

const CheckboxCaption = styled.div`
` 

const Checkbox = ({children, onChange}) => {
    return (
        <CheckboxWrapper>
            <CheckboxInput>
                <input type="checkbox" onChange={(e) => onChange(e.target.value)}/>
            </CheckboxInput>
            <CheckboxCaption>
                {children}
            </CheckboxCaption>
        </CheckboxWrapper>
    )                 
    
}

export default Checkbox;