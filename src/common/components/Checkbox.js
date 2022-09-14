import React from 'react'
import styled from "styled-components/macro"
import { fontSize } from '../style';

const CheckboxWrapper = styled.div`
  font-size: ${fontSize.fontSize3};
  max-width: 400px;
  display: flex;

` 

const CheckboxInput = styled.div`
   input {
    width: 23px;
    height: 23px;
    cursor: pointer;
   }
   margin-top: 2px;
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