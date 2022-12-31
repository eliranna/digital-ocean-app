import React, {useState, useRef} from 'react'
import styled from "styled-components/macro"

import SearchModal from './SearchModal'

import { maxWidth, fontSize, spacing } from '../ob-style';
import {useViewport} from '../ViewportProvider';

const Wrapper = styled.div`
    width: 100%;
    padding: 14px 24px 0 24px;
`

const SearchBox = styled.div`
    background: #ffffff;
    border: 0.5px solid rgba(0,0,0,0.08);
    box-shadow: 0 3px 10px rgb(0 0 0 / 10%);
    transform: translate3d(0,0,0);
    border-radius: 1000px;
    align-items: stretch;
    color: #222222;
    display: flex;
    justify-content: space-between;
    min-height: 56px;
    min-width: 285px;
`

const FiltersCell = styled.div`
    width: 56px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const FiltersButton = styled.div`
    border: 1px solid #dddddd;
    border-radius: 25px;
    margin: 0 10px;
    align-items: center;
    box-sizing: border-box;
    display: flex;
    height: 36px;
    justify-content: center;
    width: 36px;
    img {
        display: block;
        height: 16px;
        width: 16px;
        fill: #222222;
    }
`

const SearchBoxInput = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;  
`

const SearchIcon = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 60px;
    align-items: center;
    img {
        display: block;
        height: 16px;
        width: 16px;
        fill: currentcolor;
    }
`

const SearchBoxInputMainCaption = styled.div`
    font-size: 14px;
    font-weight: 700;

`

const SearchBoxInputDescCaption = styled.div`
    font-size: 14px;
    color: #717171;
    font-weight: 600;
`


const MobileSearch = () => {

    const [isSearchModalOpen, openSearchModal] = useState(false)

    return (
        <Wrapper>
            <SearchBox onClick={() => openSearchModal(true)}>
                <SearchIcon>
                    <img src="/assets/otoboto/search.svg"/>
                </SearchIcon>
                <SearchBoxInput>
                    <SearchBoxInputMainCaption>
                        חפשו רכב
                    </SearchBoxInputMainCaption>
                    <SearchBoxInputDescCaption>
                        בחרו קטגוריה, תקציב ואזור מכירה
                    </SearchBoxInputDescCaption>
                </SearchBoxInput>
                <FiltersCell>
                    <FiltersButton>
                        <img src="/assets/otoboto/filters.svg"/>
                    </FiltersButton>
                </FiltersCell>
            </SearchBox>
            <SearchModal isOpen={isSearchModalOpen} onClose={() => openSearchModal(false)}/>
        </Wrapper>
    )

}

export default MobileSearch;