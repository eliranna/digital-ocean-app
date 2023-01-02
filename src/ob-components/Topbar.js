import React from 'react'
import styled from "styled-components/macro"

import { maxWidth, breakpoints } from '../ob-style';
import {useViewport} from '../ViewportProvider';

import Search from './Search';
import MobileSearch from './MobileSearch';
import UserMenu from './UserMenu';

const DesktopTopbarWrapper = styled.div`
    width: 100%;
    box-shadow: rgb(0 0 0 / 8%) 0 1px 0;
    z-index: 1;
    height: 100px;
    direction: rtl;
`

const MobileTopbarWrapper = styled.div`
    width: 100%;
    box-shadow: rgb(0 0 0 / 16%) 0 0 6px;
    z-index: 1;
    height: 100px;
    direction: rtl;
`

const Wrapper = styled.div`
    max-width: ${maxWidth.xxLarge};
    width: 100%;
    right: 0;
    left: 0;
    margin-left: auto;
    margin-right: auto;
    justify-content: space-between;
    align-items: center;
    display: flex;
    flex-direction: row;
    height: 100%;
    position: relative;
    width: 100%;       
    @media (${breakpoints.desktop}) {
        padding-inline-end: 80px;
        padding-inline-start: 80px;        
    }
`;

const LogoSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    img {
        width: 55px;
    }
`

const SearchSection = styled.div`
    min-width: 348px;
    padding: 0 24px;
`

const UserSection = styled.div`
    flex-direction: row;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`

const TabletTopbarWrapper = styled.div`
    width: 100%;
    box-shadow: rgb(0 0 0 / 8%) 0 1px 0;
    z-index: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding-inline-end: 24px;
    padding-inline-start: 24px; 
    direction: rtl;
`

const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding-bottom: 20px;
`

const RowUpper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 70px;
`

const MobileTopbar = ({searchParams, onSearch}) => {

    return (
        <MobileTopbarWrapper>
            <MobileSearch initialSearchParams={searchParams} onSearch={onSearch}/>
        </MobileTopbarWrapper>
    )
}

const DesktopTopbar = () => {
    return (
        <DesktopTopbarWrapper>
            <Wrapper>
                <LogoSection>
                    <img src="/assets/otoboto/logo.svg"/>
                </LogoSection>   
                <SearchSection>
                    <Search/>
                </SearchSection> 
                <UserSection>
                    <UserMenu/>
                </UserSection>      
            </Wrapper>
        </DesktopTopbarWrapper>
    )
}

const TabletTopbar = () => {
    return (
        <TabletTopbarWrapper>
            <RowUpper>
                <LogoSection>
                    <img src="/assets/otoboto/logo.svg"/>
                </LogoSection>  
                <UserSection>
                    <UserMenu/>
                </UserSection>   
            </RowUpper>
            <Row>
                <SearchSection>
                    <Search/>
                </SearchSection> 
            </Row>
        </TabletTopbarWrapper>
    )
}

const Topbar = ({searchParams}) => {

    const { isDesktop, isTablet } = useViewport();

    const handleSearch = (searchParams) => {
        console.log(searchParams)
    }

    return isDesktop() ? <DesktopTopbar/> : (isTablet() ? <TabletTopbar/> : <MobileTopbar searchParams={searchParams} onSearch={handleSearch}/>) 
}

export default Topbar;