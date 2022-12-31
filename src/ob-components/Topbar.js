import React from 'react'
import styled from "styled-components/macro"

import { maxWidth, breakpoints } from '../ob-style';
import Search from './Search';
import UserMenu from './UserMenu';

const TopbarWrapper = styled.div`
    width: 100%;
    box-shadow: rgb(0 0 0 / 8%) 0 1px 0;
    height: 100px;
    z-index: 1;
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
    padding-inline-end: 80px;
    padding-inline-start: 80px;
`;

const LogoSection = styled.div`
    @media (${breakpoints.desktop}) {
        flex: 1 0 140px;
    }
`

const SearchSection = styled.div`
    flex: 0 1 auto;
    min-width: 348px;
    padding: 0 24px;
`

const UserSection = styled.div`
    flex: 1 0 140px;
    flex-direction: row;
    display: flex;
    justify-content: flex-end;
`

const Topbar = () => {

    return (
        <TopbarWrapper>
            <Wrapper>
                <LogoSection>
                </LogoSection>   
                <SearchSection>
                    <Search/>
                </SearchSection> 
                <UserSection>
                    <UserMenu/>
                </UserSection>      
            </Wrapper>
        </TopbarWrapper>
    )
}

export default Topbar;