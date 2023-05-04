import React, { useState } from 'react';
import styled from 'styled-components/macro';
import { colors, fontSize, fontWeight, device } from '../common/style'
import { Section, Centered } from '../common/layout';
import { HugeTitle, Slogen as SlogenTitle } from '../common/captions';

const SLOGEN_MAX_WIDTH = "826px"

const Wrapper = styled(Section)``

const SlogenPanel = styled.div`
    max-width: ${SLOGEN_MAX_WIDTH};
    text-align: center;
`;

const Slogen = () => {
    return (
        <Wrapper>
            <Centered>
                <SlogenPanel>
                    <SlogenTitle>
                        סוללים את הדרך אל עולמות ההייטק והסייבר, בצה”ל ובאזרחות.
                    </SlogenTitle>
                </SlogenPanel>
            </Centered>
        </Wrapper>
    )
}

export default Slogen;