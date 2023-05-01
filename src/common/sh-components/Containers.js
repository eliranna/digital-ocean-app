import React, { useState } from 'react';
import styled from 'styled-components/macro';
import { colors, fontSize, fontWeight, device } from '../style'

const GradiantBrderedBox = styled.div`
    position: relative;
    ::before {
        content: "";
        position: absolute;
        inset: 0;
        border-radius: 10px; 
        padding: 1px; 
        background: ${colors.gradient};
        -webkit-mask: 
           linear-gradient(#fff 0 0) content-box, 
           linear-gradient(#fff 0 0);
            -webkit-mask-composite: xor;
            mask-composite: exclude; 
      }

`

export {GradiantBrderedBox}