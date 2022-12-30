import React, {useState} from 'react'
import styled from "styled-components/macro"

import { maxWidth } from '../ob-style';

import BubblePanel from './BubblePanel';

import CategoriesPanel from './CategoriesPanel';
import PriceSelectionPanel from './PriceSelectionPanel';

const CAPTION_ALL_CATEGORIES = "כל הרכבים";
const CAPTION_ALL_PRICES = "כל המחירים";

const Wrapper = styled.div`
    background-color: #ffffff;
    border: 1px solid #dddddd;
    border-radius: 40px;
    box-shadow: 0 1px 2px rgb(0 0 0 / 8%), 0 4px 12px rgb(0 0 0 / 5%);
    transition: box-shadow 0.2s ease;
    height: 48px;
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
    min-width: 150px;
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
    padding: 10px;
    height: 32px;
    width: 32px;
    color: white;
    transition: all 0.2s cubic-bezier(0.35,0,0.65,1);
    :hover {
        background-color: #E00B41;
    }
    img {
        display: block;
        fill: none;
        height: 12px;
        width: 12px;
        stroke: currentcolor;
        stroke-width: 5.33333;
        overflow: visible;
        filter: invert(1);
    }
`

const CellContent = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const Search = () => {

    const [isCategoriesDialogOpen, openCategoriesDialog] = useState(false)
    const [selectedCategoriesIds, setSelectedCategoriesIds] = useState([])
    const [selectedCategoriesCaption, setSelectedCategoriesCaption] = useState(CAPTION_ALL_CATEGORIES)

    const [isPriceDialogOpen, openPriceDialog] = useState(false)
    const [selectedPrice, setSelectedPrice] = useState(null)
    const [selectedPriceCaption, setSelectedPriceCaption] = useState(CAPTION_ALL_PRICES)

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

    return (
        <Wrapper>
            <Cell>
                <CellContent onClick={showCategoriesDialog}>
                    {selectedCategoriesCaption}
                </CellContent>
                <BubblePanel show={isCategoriesDialogOpen} onClickOutside={closeCategoriesDialog} width={"431px"}>
                    <CategoriesPanel initialSelectedCategories={selectedCategoriesIds} onCategoriesChange={updateCategoriesSelection}/>
                </BubblePanel>
            </Cell>
            <Seperator/>
            <Cell>
                <CellContent onClick={showPriceDialog}>
                    {selectedPriceCaption}
                </CellContent>
                <BubblePanel show={isPriceDialogOpen} onClickOutside={closePriceDialog} width={"431px"}>
                    <PriceSelectionPanel initialSelectedPrice={selectedPrice} onPriceChange={updatePriceSelection} onChange={updatePriceSelection}/>
                </BubblePanel>
            </Cell>
            <Seperator/>
            <Cell>
                מיקום
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