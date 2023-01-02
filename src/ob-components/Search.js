import React, {useState, useRef} from 'react'
import styled from "styled-components/macro"

import { maxWidth, fontSize, spacing } from '../ob-style';
import {useViewport} from '../ViewportProvider';

import BubblePanel from './BubblePanel';
import Spacer from './Spacer'

import CategoriesSelectionPanel from './CategoriesSelectionPanel';
import BudgetSelectionPanel from './BudgetSelectionPanel';
import LocationSelectionPanel from './LocationSelectionPanel'

import {LOCATIONS} from '../locations';

const CAPTION_ALL_CATEGORIES = "בחר קטגוריות";
const CAPTION_ALL_PRICES = "הכנס תקציב";
const CAPTION_ALL_LOCATIONS = "חפש יישובים";


const Wrapper = styled.div`
    direction: rtl;
    background-color: #ffffff;
    border: 1px solid #dddddd;
    border-radius: 40px;
    box-shadow: 0 1px 2px rgb(0 0 0 / 8%), 0 4px 12px rgb(0 0 0 / 5%);
    transition: box-shadow 0.2s ease;
    height: 66px;
    display: flex;
    justify-content: space-between; 
    :hover {
        box-shadow: 0 2px 4px rgba(0,0,0,0.18);
    }
`;

const Cell = styled.div`
    background: transparent;
    cursor: pointer;
    position: relative;
    padding: 0;
    text-align: inherit;
    border: 1px solid transparent;
    border-radius: 4px;
    margin: -1px;
    width: 100%;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-width: 170px;
`

const CellWide = styled(Cell)`
    min-width: 200px;
`

const SearchCell = styled(Cell)`
    align-items: flex-end;
    width: 35px;
    flex-grow: 0;
    min-width: 35px;
`

const Seperator = styled.div`
    background-color: #dddddd;
    height: 100%;
    width: 1px;
`

const SearchButton = styled.div`
    background-color: #FF385C;
    margin: 7px 0 7px 7px;
    border-radius: 50%;
    padding: 16px;
    height: 48px;
    width: 48px;
    color: white;
    transition: all 0.2s cubic-bezier(0.35,0,0.65,1);
    :hover {
        background-color: #E00B41;
    }
    img {
        display: block;
        fill: none;
        height: 16px;
        width: 16px;
        stroke: currentcolor;
        stroke-width: 4;
        overflow: visible;
        filter: invert(1);
        line-height: 16px;
    }
`

const CellContent = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: right;
    padding-right: 36px;
`

const CellTitle = styled.div`
    font-size: ${fontSize.fontSize0};
    font-weight: 700;
`

const CellValue = styled.div`
    font-size: ${fontSize.fontSize1};
    font-weight: 500;
    color: ${props => props.empty ? 'gray' : null}
`

const InvisibleInput = styled.input`
    width: 100%;
    border: none;
    outline: none;
    font-size: ${fontSize.fontSize1};
    font-weight: 500;
    padding: 0px;
`

const BubblePanelInnerPane = styled.div`
    display: flex;
    flex-direction: column;
    text-align: right; 
`

const BubblePanelTitle = styled.div`
    font-size: ${fontSize.fontSize1};
    font-weight: 600;
    text-align: right;
`

const BubblePanelDescription = styled.div`
    font-size: ${fontSize.fontSiz1};
    font-weight: 400;
    color: #717171;
    text-align: right;
`

const Search = () => {

    const MAX_PRICE = 250;
    const MIN_PRICE = 5;
    const DEF_PRICE = 30;

    const locationInputRef = useRef(null);
    const { isDesktop, isTablet } = useViewport();

    const [isCategoriesDialogOpen, openCategoriesDialog] = useState(false)
    const [selectedCategoriesIds, setSelectedCategoriesIds] = useState([])
    const [selectedCategoriesCaption, setSelectedCategoriesCaption] = useState(CAPTION_ALL_CATEGORIES)

    const [isPriceDialogOpen, openPriceDialog] = useState(false)
    const [selectedPrice, setSelectedPrice] = useState(null)
    const [selectedPriceCaption, setSelectedPriceCaption] = useState(CAPTION_ALL_PRICES)

    const [isLocationDialogOpen, openLocationDialog] = useState(false)
    const [selectedLocation, setSelectedLocation] = useState(null)
    const [selectedLocationCaption, setSelectedLocationCaption] = useState(CAPTION_ALL_LOCATIONS)
    const [locationSuggestions, setLocationSuggestions] = useState([])

    const showCategoriesDialog = () => {
        openCategoriesDialog(true)
    }

    const closeCategoriesDialog = () => {
        openCategoriesDialog(false)
    }

    const showPriceDialog = () => {
        openPriceDialog(true)
    }

    const closePriceDialog = () => {
        openPriceDialog(false)
    }

    const showLocationDialog = () => {
        openLocationDialog(true)
    }

    const closeLocationDialog = () => {
        setLocationSuggestions([])
    } 

    const computeCategoriesString = (categoriesTitles) => {
        if (categoriesTitles.length === 0) {
            return CAPTION_ALL_CATEGORIES
        } else if (categoriesTitles.length === 1) {
            return categoriesTitles[0]
        } else {
            return `${categoriesTitles.length} קטגוריות`
        }
    }

    const computePriceCaption = (price) => {
        if (price === MAX_PRICE) {
            return `${price} אלף שקלים ומעלה`
        }
        return `כ- ${price} אלף שקלים`
    }

    const updateCategoriesSelection = (categories) => {
        setSelectedCategoriesIds(categories.map(category => category.id))
        setSelectedCategoriesCaption(computeCategoriesString(categories.map(category => category.title)))
    }

    const updatePriceSelection = (value) => {
        setSelectedPrice(value)
        setSelectedPriceCaption(computePriceCaption(value))
    }

    const handleLocationSelection = (value) => {
        closeLocationDialog()
        setSelectedLocation(value)
        locationInputRef.current.value = value
    }

    const getLocationSuggestions = (term) => {
        const suggestions = LOCATIONS.filter(location => location.startsWith(term)).slice(0, 5);
        setLocationSuggestions(suggestions)
    }

    const handleLocationClick = () => {
        locationInputRef.current.focus()
        setLocationSuggestions(LOCATIONS.slice(0, 5))
    }

    return (
        <Wrapper>
            <Cell>
                <CellContent onClick={showCategoriesDialog}>
                    <CellTitle>
                        סוג הרכב
                    </CellTitle>
                    <CellValue empty={selectedCategoriesIds.length === 0}>
                        {selectedCategoriesCaption}
                    </CellValue>
                </CellContent>
                <BubblePanel show={isCategoriesDialogOpen} onClickOutside={closeCategoriesDialog} width={"431px"}>
                    <BubblePanelInnerPane>
                        <BubblePanelTitle>
                            בחר את קטגוריית הרכב
                        </BubblePanelTitle>
                        <Spacer height={spacing.spacing1}/>
                        <BubblePanelDescription>
                            ניתן לבחור מספר קטגוריות
                        </BubblePanelDescription>
                        <CategoriesSelectionPanel initialSelectedCategories={selectedCategoriesIds} onCategoriesChange={updateCategoriesSelection}/>
                    </BubblePanelInnerPane>
                </BubblePanel>
            </Cell>
            <Seperator/>
            <CellWide>
                <CellContent onClick={showPriceDialog}>
                    <CellTitle>
                        מחיר משוער
                    </CellTitle>
                    <CellValue empty={!selectedPrice}>
                        {selectedPriceCaption}
                    </CellValue>                    
                </CellContent>
                <BubblePanel show={isPriceDialogOpen} onClickOutside={closePriceDialog} width={"431px"}>
                    <BubblePanelTitle>
                        מהו התקציב המשוער?
                    </BubblePanelTitle>
                    <Spacer height={spacing.spacing1}/>
                    <BubblePanelDescription>
                        נציג בפניכם רק רכבים שמחירם קרוב לתקציבכם
                    </BubblePanelDescription> 
                    <Spacer height={spacing.spacing8}/>                   
                    <BudgetSelectionPanel maxPrice={MAX_PRICE} minPrice={MIN_PRICE} initialSelectedPrice={selectedPrice} onChange={updatePriceSelection}/>
                </BubblePanel>
            </CellWide>
            <Seperator/>
            <Cell>
                <CellContent onClick={handleLocationClick}>
                    <CellTitle>
                        אזור מכירה
                    </CellTitle>
                    <CellValue>
                        <InvisibleInput ref={locationInputRef} type="text" placeholder={selectedLocationCaption} onChange={e => getLocationSuggestions(e.target.value)}/>
                    </CellValue>  
                </CellContent> 
                <BubblePanel show={locationSuggestions.length > 0} onClickOutside={closeLocationDialog} width={"350px"} xloc={isTablet() ? ['-149px', '237px'] : null}>
                    <LocationSelectionPanel suggestions={locationSuggestions} onSelect={handleLocationSelection}/>
                </BubblePanel>
            </Cell>
            <SearchCell>
                <SearchButton>
                    <img src="/assets/otoboto/search.svg"/>
                </SearchButton>
            </SearchCell>
        </Wrapper>
    )
}

export default Search;