import React, { useState } from 'react';
import styled from 'styled-components/macro';
import { colors, fontSize, fontWeight, device } from '../common/style'

const Wrapper = styled.div`
    background-image: url("./shavitim-assets/cover.svg");
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center;
    color: ${colors.textOnDark};
    position: relative;
`;

const LogoBox = styled.div`
    margin-top: 205px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media ${device.mobile} {
        margin-top: 33%;
    }
    @media ${device.mobileS} {
        margin-top: 18%;
    }
`;

const Logo = styled.img`
    align-self: center;
    margin-right: 44px;
    @media ${device.mobile} {
        width: 250px;
    }
`;

const Slogen = styled.div`
    align-self: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const SlogenText = styled.div`
    max-width: 235px;
    text-align: center;
    align-self: center;
    font-weight: ${fontWeight.extraLight};
    font-size: ${fontSize.fontSize4};
    color: ${colors.textOnDark};
    @media ${device.mobile} {
        max-width: 190px;
        font-size: ${fontSize.fontSize3};
    }
`;

const Header = styled.div`
    width: 100%;
    height: 110px;
    padding-top: 76px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media ${device.mobile} {
        padding-top: 35px;
    }
`;

const HeaderInner = styled.div`
    max-width: 1200px;
    padding-right: 80px;
    padding-left: 80px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-self: center;
    position: relative;
    @media ${device.mobile} {
        padding-right: 40px;
        padding-left: 40px;
    }
`;

const Right = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: right;
`;

const Center = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: right;
    position: absolute;
    left: 0;
    right: 0;
    margin-right: auto;
    margin-left: auto;
    top: 8px;
    width: fit-content;
    @media ${device.mobile} {
        display: none;
    }
    @media ${device.tablet} {
        position: unset;
    }
`;

const Left = styled.div`

`;

const LogoShortBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const LogoShort = styled.img`
    align-self: center;
    @media ${device.mobile} {
        display: none;
    }
`;

const NavBar = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: right;
    gap: 25px;
`;

const Links = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: right;
    gap: 30px;
`;

const NavLink = styled.div`
    font-size: ${fontSize.fontSize1};
    letter-spacing: 0.1em;
    color: ${colors.textOnDarkWeak};
    align-self: center;
`;

const RegisterButton = styled.button`
    font-size: ${fontSize.fontSize1};
    letter-spacing: 0.1em;
    font-weight: ${fontWeight.extraLight};
    height: 35px;
    line-height: 26px;
    width: 100px;
    text-align: center;
    color: ${colors.textOnDark};
    background: none;
    border-radius: 40px;
    border: 1px solid ${colors.textOnDark};
    outline: none;
`;

const BurgerMenu = styled.img`
    width: 25px;
    display: none;
    color: ${colors.textOnDark};
    @media ${device.mobile} {
        display: unset;
    }
`;

const Cover = () => {
    return (
        <Wrapper>
            <Header>
                <HeaderInner>
                    <Right>
                        <LogoShortBox>
                            <LogoShort src="./shavitim-assets/logo-short.svg"/>
                            <BurgerMenu src="./shavitim-assets/menu.svg"/>
                        </LogoShortBox>
                    </Right>
                    <Center>
                        <NavBar>
                            <NavLink>
                                אודות התוכנית
                            </NavLink>
                            <NavLink>
                                נושאי הלימוד
                            </NavLink>
                            <NavLink>
                                מפרט
                            </NavLink>
                            <NavLink>
                                שאלות נפוצות
                            </NavLink>
                        </NavBar>
                    </Center>
                    <Left>
                        <Links>
                            <RegisterButton>
                                הרשמה
                            </RegisterButton>
                        </Links>
                    </Left>
                </HeaderInner>
            </Header>
            <LogoBox>
                <Logo src="./shavitim-assets/logo.svg"/>
            </LogoBox>
            <Slogen>
                <SlogenText>תוכנית הייטק ייחודית וחוויתית עבור תלמידי התיכון</SlogenText>
            </Slogen>
        </Wrapper>
    )
}

export default Cover