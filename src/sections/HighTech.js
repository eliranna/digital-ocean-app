import React, { useState } from 'react';
import styled from 'styled-components/macro';
import { colors, fontSize, fontWeight, device } from '../common/style'
import Section from '../common/sh-components/Section'
import {GradientText, SectionHeader, SectionText} from '../common/sh-components/Text'
import {GradiantBrderedBox} from '../common/sh-components/Containers'
import { CardsBoard, Card } from '../common/sh-components/Cards'

const HighTechSection = styled(Section)`
    height: 736px;
`

const BoardPanel = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1035px;
    @media ${device.tabletL} {
        max-width: 800px;
    }
`

const BoardImage = styled.img`
    width: 100%;
    border-radius: 31px;
    margin-top: -48px;
`

const Content = styled.div`
    position: absolute;
    top: 151px;
    right: 0;
    left: 0;
    margin-right: auto;
    margin-left: auto;
    max-width: 625px;
    @media ${device.tabletL} {
        top: -38px;
    }
`

const Title = styled(SectionHeader)`
    text-align: center;
    margin-bottom: 38px;
    @media ${device.tabletS} {
        margin-bottom: 76px;
    }
`

const Desc = styled(SectionText)`
    text-align: center
`

const HighTech = () => {
    return (
        <HighTechSection paddingBottom={false} background={"linear-gradient(180deg, rgba(255, 255, 255, 100) 0%, #a181ff 50%, #121212 91%)"}>
            <BoardPanel>
                <BoardImage src="./shavitim-assets/board.jpg"/>
                <Content>
                    <Title>
                        מגלים את עולמות התוכן של ההייטק
                    </Title>
                    <Desc>
                        שביטים חושפת את התלמידים אל עולמות התוכן של ההייטק: הגישה, הכלים, המושגים והדינמיקה המאפיינת את חברות הטכנולוגיה המתקדמות. כמו בהייטק, המשתתפים נחלקים לצוותים קטנים ועצמאיים הפועלים יחדיו להשלמת פרוייקט מאתגר ובכך מפתחים מיומנויות של עבודה צוותית הנדרשת בסביבת טכנולוגית. לבסוף, מיישמים התלמידים את תכני הלמוד במהלך פרוייקט בינה מלאכותית מאתגר. 
                    </Desc>
                </Content>
            </BoardPanel>
        </HighTechSection>
    )
}

export default HighTech;
