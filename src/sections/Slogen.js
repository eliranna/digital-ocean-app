import React, { useState } from 'react';
import styled from 'styled-components/macro';
import { Section, SectionBody, Centered } from '../common/layout';
import { Slogen as SlogenTitle } from '../common/captions';

const SLOGEN_MAX_WIDTH = "650px"

const Wrapper = styled(Section)``

const SlogenPanel = styled.div`
    max-width: ${SLOGEN_MAX_WIDTH};
    text-align: center;
`;

const Slogen = () => {
    return (
        <Wrapper>
            <SectionBody>
                <Centered>
                    <SlogenPanel>
                        <SlogenTitle>
                            סוללים את הדרך אל עולמות ההייטק והסייבר, בצה”ל ובאזרחות.
                        </SlogenTitle>
                    </SlogenPanel>
                </Centered>
            </SectionBody>
        </Wrapper>
    )
}

export default Slogen;