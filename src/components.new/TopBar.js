import React, { useState } from 'react';
import styled from "styled-components/macro";
import { Page, PageBody, SectionSpacer, Spacer } from '../common/layout';
import { NavBarLink as NavBarTitle } from '../common/captions';
import { ParallaxProvider } from 'react-scroll-parallax';
import Cover from '../sections/Cover';
import About from '../sections/About';
import Slogen from '../sections/Slogen';
import { Link } from 'react-router-dom';
import { spacing, pageWidth } from '../common/style';
import { RoundButton } from '../common/shared/Button';

const links = [
    {
        caption: 'אודות התוכנית',
        route: '/'
    },
    {
        caption: 'נושאי הלימוד',
        route: '/'
    },
    {
        caption: 'פרטי התוכנית',
        route: '/'
    },
    {
        caption: 'שאלות נפוצות',
        route: '/'
    }
]

const Wrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: flex-end;
    max-width: ${pageWidth.normal};
    right: 0;
    left: 0;
    margin-right: auto;
    margin-left: auto;
`
const NavBar = styled.div`
    position: absolute;
    right: 0;
    left: 0;
    top: 6px;
    margin-right: auto;
    margin-left: auto;
    display: flex;
    width: fit-content;
`
const NavBarItem = styled.div``
const ButtonsPanel = styled.div``

const TopBar = ({darkMode}) => {
    return (
        <Wrapper>
            <NavBar>
                {links.map((link, index) => {
                    return (
                        <>
                            <NavBarItem key={index}>
                                <Link to={link.route}>
                                    <NavBarTitle darkMode={darkMode}>{link.caption}</NavBarTitle>
                                </Link>
                            </NavBarItem>
                            {(index < links.length - 1) && <Spacer width={spacing.spacing8}/>}
                        </>
                    )
                })}
            </NavBar>
            <ButtonsPanel>
                <Link to={"/"}>
                    <RoundButton darkMode={darkMode}>
                        הרשמה
                    </RoundButton>
                </Link>
            </ButtonsPanel>
        </Wrapper>   
    )
}

export default TopBar