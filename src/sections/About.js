import React from 'react'
import styled from 'styled-components/macro'
import { Section, SectionBody } from '../common/layout'
import SectionContent from '../common/shared/SectionContent'
import SectionRow from '../common/shared/SectionRow'
import SectionPod from '../common/shared/ImagePod'

const SECTION_TOPIC = 'על התוכנית'
const SECTION_TITLE = 'הכירו את שביטים'
const SECTION_DESC = `
    שביטים הינה תוכנית ייחודית וחוויתית עבור תלמידי התיכון.
    משתתפי התוכנית ילמדו פיתוח תוכנה באופן יסודי ומעמיק,
    יחשפו אל טכנולוגיות העתיד, יתנסו בדינמיקה צוותית ויישמו את הנלמד במהלך ביצוע פרוייקט מאתגר. 
`

const Wrapper = styled(Section)``

const AboutImage = <SectionPod src="./shavitim-assets/rocket-full.svg"/>
const AboutContent = <SectionContent align={"right"} topic={SECTION_TOPIC} title={SECTION_TITLE} desc={SECTION_DESC}/>

const About = () => {
    return (
        <Wrapper>
            <SectionBody>
                <SectionRow image={AboutImage} content={AboutContent}/>
            </SectionBody>
        </Wrapper>
    )
}

export default About