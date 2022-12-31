import React, {useState, useRef} from 'react'
import styled from "styled-components/macro"

import { maxWidth, fontSize, spacing } from '../ob-style'
import CategoriesSelectionPanel from './CategoriesSelectionPanel'

import MobilePopupPane from './MobilePopupPane'
import Spacer from './Spacer'

const Topbar = styled.div`
    padding-bottom: 16px;
`

const ArrowBack = styled.div`
    img {
        display: block;
        height: 44px;
        width: 44px;
        fill: currentcolor;
        transform: rotate(180deg);
    }
`

const CategoriesSelectionSection = styled.div`

`

const SectionTitle = styled.div`
    font-size: 22px;
    font-weight: 700;
`

const SectionDescription = styled.div`
    color: #717171;
    font-weight: 500;
`

const Content = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0px 24px;
`

const SearchModal = ({isOpen, onClose}) => {
    return (
        <MobilePopupPane isOpen={isOpen}>
            <Topbar>
                <ArrowBack onClick={onClose}>
                    <img src="/assets/otoboto/back-arrow.svg"/>
                </ArrowBack>
            </Topbar>
            <Content>
                <CategoriesSelectionSection>
                    <SectionTitle>
                        איזה סוג של רכב אתם מחפשים?
                    </SectionTitle>
                    <Spacer height={spacing.spacing1}/>
                    <SectionDescription>
                        ניתן לבחור מספר קטגוריות
                    </SectionDescription>                
                    <CategoriesSelectionPanel initialSelectedCategories={[]} onCategoriesChange={() => {}}/>
                </CategoriesSelectionSection>
            </Content>

        </MobilePopupPane>
    )
}

export default SearchModal