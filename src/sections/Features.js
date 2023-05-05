import React from 'react'
import styled from 'styled-components/macro'
import { Section, SectionBody, Spacer} from '../common/layout'
import SectionContent from '../common/shared/SectionContent'
import FeatureCardsBoard from '../components/FeatureCardsBoard'
import { spacing } from '../common/style'

const SECTION_TOPIC = 'דגשי התוכנית'
const SECTION_TITLE = 'למידה מעמיקה לצד עשייה חווייתית'

const features = [
    {
        title: 'תוכנית לימודים מעמיקה',
        desc: 'לומדים פייתון (Python), שפת התכנות המבוקשת בעולם, ומעמיקים בעקרונות בהנדסת תוכנה ובמדעי המחשב.',
        icon: "./shavitim-assets/feature-coding.svg"
    },
    {
        title: 'סוללים דרך להייטק',
        desc: 'רוכשים את הכלים שנדרשים להתמודדות עם מיוניים ליחידות הסייבר ולחברות ההייטק.',
        icon: "./shavitim-assets/feature-coding.svg"
    },
    {
        title: 'ימי העשרה חוויתיים',
        desc: 'מסיירים במרכזי פיתוח ובמעבדות חדשניות, פוגשים מומחים מעולמות ההייטק, וחווים את היקום הווירטואלי.',
        icon: "./shavitim-assets/feature-coding.svg"
    },
    {
        title: 'חווים דינמיקה צוותית',
        desc: 'מתפצלים לצוותי פיתוח קטנים ואוטונומיים הפועלים יחדיו באווירת סטארטאפ.',
        icon: "./shavitim-assets/feature-coding.svg"
    },
    {
        title: 'לומדים בקבוצה קטנה',
        desc: 'מקבלים יחס אישי והכוונה אינדיווידואלית המאפשרת למידה איכותית ומותאמת אישית. ',
        icon: "./shavitim-assets/feature-coding.svg"
    },
    {
        title: 'עושים פרוייקט גמר מאתגר',
        desc: 'מיישמים את החומר הנלמד במהלך פיתוח פרוייקט בינה מלאכותית מאתגר ומסקרן.',
        icon: "./shavitim-assets/feature-coding.svg"
    },
]

const Wrapper = styled(Section)``
const SectionHeader = styled.div``
const CardsPanel = styled.div``

const Features = () => {
    return (
        <Wrapper>
            <SectionBody>
                <SectionHeader>
                    <SectionContent align={"center"} topic={SECTION_TOPIC} title={SECTION_TITLE}/>
                </SectionHeader>
                <Spacer height={spacing.spacing32}/>
                <CardsPanel>
                    <FeatureCardsBoard features={features}/>
                </CardsPanel>
            </SectionBody>
        </Wrapper>
    )
}

export default Features