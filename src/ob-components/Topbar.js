import React from 'react'
import styled from "styled-components/macro"

import { maxWidth, padding } from '../ob-style';
import {useViewport} from '../ViewportProvider';

import Search from './Search';
import MobileSearch from './MobileSearch';
import UserMenu from './UserMenu';
import { Link } from 'react-router-dom';

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

const DesktopWrapper = styled.div`
    max-width: ${maxWidth.page};
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
    padding-inline-end: ${padding.pageDesktop};
    padding-inline-start: ${padding.pageDesktop}; 
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
    padding-inline-end: ${padding.pageTablet};
    padding-inline-start: ${padding.pageTablet}; 
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
    a {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`

const MobileTopbar = ({allowSearch, searchParams, onSearch}) => {

    return (
        <MobileTopbarWrapper>
            <MobileSearch initialSearchParams={searchParams} onSearch={onSearch}/>
        </MobileTopbarWrapper>
    )
}

const LogoComponent = () => {
    return (
        <Link to={'/'}>
            <LogoSection>
                <img src="/assets/otoboto/logo.svg"/>
            </LogoSection>  
        </Link>       
    )
}

const DesktopTopbar = ({allowSearch}) => {
    return (
        <DesktopTopbarWrapper>
            <DesktopWrapper>
                <LogoComponent/>
                <SearchSection>
                    {allowSearch && (<Search/>)}
                </SearchSection> 
                <UserSection>
                    <UserMenu/>
                </UserSection>      
            </DesktopWrapper>
        </DesktopTopbarWrapper>
    )
}

const TabletTopbar = ({allowSearch}) => {
    return (
        <TabletTopbarWrapper>
            <RowUpper>
                <LogoComponent/> 
                <UserSection>
                    <UserMenu/>
                </UserSection>   
            </RowUpper>
            {allowSearch && (
                <Row>
                    <SearchSection>
                        <Search/>
                    </SearchSection> 
                </Row>
            )}
        </TabletTopbarWrapper>
    )
}

const Topbar = ({searchParams, allowSearch, showTopbarOnMobile}) => {

    const { isDesktop, isTablet } = useViewport();

    const handleSearch = (searchParams) => {
        console.log(searchParams)
    }

    return isDesktop() ? <DesktopTopbar allowSearch={allowSearch}/> : (isTablet() ? <TabletTopbar allowSearch={allowSearch}/> : (showTopbarOnMobile && <MobileTopbar allowSearch={allowSearch} searchParams={searchParams} onSearch={handleSearch}/>)) 
}

export default Topbar;