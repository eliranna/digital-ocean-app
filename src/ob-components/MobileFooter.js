import React, {useState, useEffect} from 'react'
import styled from "styled-components/macro"
import { Link } from "react-router-dom";

import {useViewport, ViewportProvider} from '../ViewportProvider'

import {fontSize, spacing} from '../ob-style'

import Spacer from './Spacer'

const Wrapper = styled.div`
    -webkit-box-align: center !important;
    -ms-flex-align: center !important;
    display: -webkit-box !important;
    display: -moz-box !important;
    display: -ms-flexbox !important;
    display: -webkit-flex !important;
    display: flex !important;
    -webkit-align-items: center !important;
    align-items: center !important;
    border-top: 1px solid #EBEBEB !important;
    position: fixed !important;
    bottom: -60px !important;
    height: 125px !important;
    left: 0px !important;
    right: 0px !important;
    padding-bottom: 60px !important;
    contain: paint !important;
    background: #ffffff !important;
    -webkit-transition: -webkit-transform 0.2s cubic-bezier(0.455, 0.03, 0.515, 0.955),transform 0.2s cubic-bezier(0.455, 0.03, 0.515, 0.955), visibility 0.2s !important;
    -moz-transition: transform 0.2s cubic-bezier(0.455, 0.03, 0.515, 0.955), visibility 0.2s !important;
    transition: -ms-transform 0.2s cubic-bezier(0.455, 0.03, 0.515, 0.955),-webkit-transform 0.2s cubic-bezier(0.455, 0.03, 0.515, 0.955),transform 0.2s cubic-bezier(0.455, 0.03, 0.515, 0.955), visibility 0.2s !important;
    z-index: 1 !important;
    height: 125px;
    justify-content: center;
    align-items: center;
`

const NavItem = styled.div`
    width: 75px;
    height: 44px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    user-select: none;
    a {
        text-decoration: none;
    }
`
const NavItemIcon = styled.div`
    justify-content: center;
    align-items: center;
    display: flex;
    img {
        width: 25px;
    }
`
const NavItemTitle = styled.div`
    font-size: 11px;
    font-weight: 600;
    color: #222222;
    text-align: center;
`

const MobileFooter = ({}) => {

    const { isMobile } = useViewport();

    return isMobile() ? (
        <Wrapper>
            <NavItem>
                <Link to={'/'}>
                    <NavItemIcon>
                        <img src="/assets/otoboto/search.svg"/>
                    </NavItemIcon>
                    <NavItemTitle>
                        חפש
                    </NavItemTitle>
                </Link>
            </NavItem>
            <NavItem>
                <Link to={'/liked'}>
                    <NavItemIcon>
                        <img src="/assets/otoboto/likes.svg"/>
                    </NavItemIcon>
                    <NavItemTitle>
                        מועדפים
                    </NavItemTitle>
                </Link>
            </NavItem>
            <NavItem>
                <Link to={'/profile'}>
                    <NavItemIcon>
                        <img src="/assets/otoboto/profile.svg"/>
                    </NavItemIcon>
                    <NavItemTitle>
                        פרופיל
                    </NavItemTitle>
                </Link>
            </NavItem>
        </Wrapper>
    ) : null;
}

export default MobileFooter;