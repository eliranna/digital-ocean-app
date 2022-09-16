import React, {useState} from 'react'
import styled from "styled-components/macro"
import { colors, spacing, device } from '../common/style';
import Strip from '../common/components/Strip';
import Page from '../common/components/Page';
import Spacer from '../common/components/Spacer';
import Modal from '../common/components/Modal';

import Privacy from './Privacy';
import WebsiteConditions from './WebsiteConditions';
import Terms from './Terms';

const CopyRights = styled.div`
    text-align: center;
`

const FooterLinks = styled.div`
    text-align: center;
    span {
        cursor: pointer;
        :hover {
            text-decoration: underline;
        }
    }
    @media ${device.mobileL} {
        padding-right: ${spacing.spacingPaddingMobile};
        padding-left: ${spacing.spacingPaddingMobile};
    }
`

const StripFooter = styled(Strip)`
`

const Footer = () => {

    const [isModalShowen, setIsModalShowen] = useState(false);
    const [content, setContent] = useState(null);

    return (
        <StripFooter backgroundColor={colors.white}>
            <Page nerrow>
                <FooterLinks>
                  <span onClick={() => {setContent(<Privacy/>); setIsModalShowen(true)}}>
                      מדיניות פרטיות
                  </span>
                  &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                  <span onClick={() => {setContent(<WebsiteConditions/>); setIsModalShowen(true)}}>
                      תנאי שימוש באתר
                  </span>
                  &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                  {false &&
                    <>
                        <span onClick={() => {setContent(<Terms/>); setIsModalShowen(true)}}>
                            תקנון התוכנית
                        </span>
                        &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                    </>
                  }
                  <span>
                      צור קשר
                  </span>
                  <Spacer height={spacing.spacing3}/>
                  <CopyRights>
                      תוכנית שביטים Ⓒ כל הזכויות שמורות
                  </CopyRights>
                </FooterLinks>
                <Modal show={isModalShowen} onClose={() => setIsModalShowen(false)}>
                    {content}
                </Modal>
            </Page>
        </StripFooter>
    )
}

export default Footer;