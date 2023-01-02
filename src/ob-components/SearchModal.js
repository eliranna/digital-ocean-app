import React, {useState, useRef} from 'react'
import styled from "styled-components/macro"
import {Carousel} from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { maxWidth, fontSize, spacing } from '../ob-style'
import CategoriesSelectionPanel from './CategoriesSelectionPanel'
import BudgetSelectionPanel from './BudgetSelectionPanel'

import MobilePopupPane from './MobilePopupPane'
import Spacer from './Spacer'
import LocationSelectionPanel from './LocationSelectionPanel';

import {LOCATIONS} from '../locations';

const Topbar = styled.div`
    padding-bottom: 16px;
`

const ArrowBack = styled.div`
    position: absolute;
    top: 15px;
    right: 15px;
    z-index: 999999999999;
    img {
        display: block;
        height: 44px;
        width: 44px;
        fill: currentcolor;
        transform: rotate(180deg);
    }
`

const SelectionSection = styled.div`
    //box-shadow: 0 0 0 1px rgb(0 0 0 / 4%), 0 6px 20px rgb(0 0 0 / 20%);
    border-radius: 24px;
    margin-top: 42px;
    transition: max-height 0.5s ease-out;
    direction: rtl;
`

const SelectionSectionBody = styled.div`
    visibility: ${props => props.collapsed ? 'hidden' : 'visible'};
    opacity: ${props => props.collapsed ? '0' : '1'};
    transition: visibility 0s, opacity 0.5s linear;
`

const CategoriesSelectionSection = styled(SelectionSection)`
    
`

const BudgetSelectionSection = styled(SelectionSection)`

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
    padding: 64px 24px;
    .carousel .control-dots {
        top: -8px;
        display: flex;
        justify-content: center;
        position: unset;
        flex-direction: row;
    }
    .carousel .slide img {
        width: unset!important;
    }
`

const Footer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    animation: fadeInUp-f1275j53 ease 0.5s;
    animation-fill-mode: forwards;
    animation-delay: var( --staggered_animation_delay, 1 );
    border-top: 1px solid rgba(0,0,0,0.05);
    padding: 12px 24px;
    background: rgba(255,255,255,1);
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
    margin-left: auto;
    margin-right: auto;
    direction: rtl;
`

const FullButton = styled.div`
    cursor: pointer !important;
    margin: 0px !important;
    text-align: center !important;
    text-decoration: none !important;
    width: auto !important;
    touch-action: manipulation !important;
    font-size: 16px;
    line-height: 20px;
    font-weight: 600;
    border-radius: 8px;
    outline: none !important;
    padding: 14px 24px !important;
    transition: box-shadow 0.2s ease 0s, -ms-transform 0.1s ease 0s, -webkit-transform 0.1s ease 0s, transform 0.1s ease 0s !important;
    -webkit-tap-highlight-color: transparent !important;
    border: none !important;
    background: linear-gradient(to right, rgb(230, 30, 77) 0%, rgb(227, 28, 95) 50%, rgb(215, 4, 102) 100%) !important;
    color: rgb(255, 255, 255) !important;
    height: 46px;
`

const LinkButton = styled.div`
    
`

const NextButton = styled(FullButton)`

`

const BackButton = styled(LinkButton)`
    visibility: ${props => props.visible ? 'visible' : 'hidden'};
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    text-decoration: underline;
`

const SearchButton = styled(FullButton)`
    
`

const BudgetSelectionPanelPane = styled.div`
    
`

const LocationInputPane = styled.div`
    
`

const LocationInput = styled.input`
    -webkit-box-align: center !important;
    flex: 1 1 0% !important;
    overflow: hidden !important;
    align-items: center !important;
    display: flex !important;
    margin: 0px !important;
    padding: 0px 20px !important;
    white-space: nowrap !important;
    height: 60px !important;
    border-radius: 12px !important;
    border: 1px solid rgb(176, 176, 176) !important;
    background: rgb(255, 255, 255) !important;
    color: rgb(34, 34, 34) !important;
    font-size: 16px;
    font-weight: 600;
    width: 100%;
`

const StageIndicator = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 100%;
    margin-right: 15px;
    margin-left: 15px;
    box-shadow: 0 0 0 1px rgb(0 0 0 / 4%), 0 6px 20px rgb(0 0 0 / 20%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    img {
        width: 25px;
        margin-right: 3px;
        margin-top: 4px;
    }
`

const SearchModal = ({isOpen, onClose}) => {

    const locationInputRef = useRef(null);

    const [stage, setStage] = useState(2)
    const [locationSuggestions, setLocationSuggestions] = useState(LOCATIONS.slice(0,5))
    const [selectedLocation, setSelectedLocation] = useState(null)

    const onTouchStart = (e) => {
        e.stopPropagation()
    }

    const handleLocationSelection = (value) => {
        setSelectedLocation(value)
        locationInputRef.current.value = value
        setLocationSuggestions([])
    }

    const getLocationSuggestions = (term) => {
        const suggestions = LOCATIONS.filter(location => location.startsWith(term)).slice(0, 5);
        setLocationSuggestions(suggestions)
    }

    return (
        <MobilePopupPane isOpen={isOpen}>
            <ArrowBack onClick={onClose}>
                <img src="/assets/otoboto/back-arrow.svg"/>
            </ArrowBack>
            <Content>
                <Carousel
                      showArrows={false}
                      showStatus={false}
                      selectedItem={stage}
                      swipeScrollTolerance={50}
                      swipeable={false}
                      onChange={(index) => setStage(index)}
                      renderIndicator={(onClickHandler, isSelected, index, label) => {
                        return (
                          <StageIndicator
                            style={{border: isSelected ? '2px solid #FF385C' : 'none'}}
                            onClick={onClickHandler}
                            onKeyDown={onClickHandler}
                            value={index}
                            key={index}
                            role="button"
                            tabIndex={0}
                            aria-label={`${label} ${index + 1}`}
                          >
                            {index === 2 && (<img src="/assets/otoboto/logo.svg"/>)}
                            {index === 1 && (<img src="/assets/otoboto/shekel.svg"/>)}
                            {index === 0 && (<img src="/assets/otoboto/location.svg"/>)}
                          </StageIndicator>
                        );
                      }}>
                    <CategoriesSelectionSection>
                        <SelectionSectionBody>
                            <SectionTitle>
                                היכן תרצו לחפש?
                            </SectionTitle>
                            <Spacer height={spacing.spacing1}/>
                            <SectionDescription>
                                נציג בפניכם רכבים שאזור מכירתם קרוב אליכם
                            </SectionDescription> 
                            <Spacer height={spacing.spacing8}/> 
                            <LocationInputPane>
                                <LocationInput ref={locationInputRef} type="text" placeholder={"חפשו יישובים"} onChange={e => getLocationSuggestions(e.target.value)}/>
                            </LocationInputPane>              
                            <LocationSelectionPanel suggestions={locationSuggestions} onSelect={handleLocationSelection} />
                        </SelectionSectionBody>
                    </CategoriesSelectionSection>
                    <CategoriesSelectionSection>
                        <SelectionSectionBody>
                            <SectionTitle>
                                מהו תקציבכם המשוער?
                            </SectionTitle>
                            <Spacer height={spacing.spacing1}/>
                            <SectionDescription>
                                ניתן לבחור מספר קטגוריות
                            </SectionDescription> 
                            <Spacer height={spacing.spacing8}/>    
                            <BudgetSelectionPanelPane onTouchStart={onTouchStart}>
                                <BudgetSelectionPanel initialSelectedPrice={30} minPrice={5} maxPrice={250} onChange={()=>{}}/>
                            </BudgetSelectionPanelPane>
                        </SelectionSectionBody>
                    </CategoriesSelectionSection>
                    <CategoriesSelectionSection>
                        <SelectionSectionBody>
                        <SectionTitle>
                                איזה סוג של רכב אתם מחפשים?
                            </SectionTitle>
                            <Spacer height={spacing.spacing1}/>
                            <SectionDescription>
                                ניתן לבחור מספר קטגוריות
                            </SectionDescription> 
                            <Spacer height={spacing.spacing8}/>               
                            <CategoriesSelectionPanel initialSelectedCategories={[]} onCategoriesChange={() => {}}/>
                        </SelectionSectionBody>
                    </CategoriesSelectionSection>  
                </Carousel>            
            </Content>
            <Footer>
                <BackButton visible={stage==0 || stage==1} onClick={() => setStage(stage+1)}>
                    אחורה
                </BackButton>
                {(stage==1 || stage==2) && (
                    <NextButton onClick={() => setStage(stage-1)}>
                        שאלה הבאה
                    </NextButton>
                )}
                {(stage==0) && (
                    <SearchButton>
                        חפש
                    </SearchButton>
                )}                
            </Footer>

        </MobilePopupPane>
    )
}

export default SearchModal