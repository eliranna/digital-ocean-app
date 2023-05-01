const spacing = {
    spacing0: '0',
    spacing1: '0.25rem',
    spacing2: '0.5rem',
    spacing3: '0.75rem',
    spacing4: '1rem',
    spacing5: '1.25rem',
    spacing6: '1.5rem',
    spacing8: '2rem',
    spacing10: '2.5rem',
    spacing12: '3rem',
    spacing16: '4rem',
    spacing20: '5rem',
    spacing24: '6rem',
    spacing32: '8rem',
    spacingPaddingMobile: '3rem'
}

const size = {
    mobileSS: '325px',
    mobileS: '550px',
    mobile: '733px',
    tabletS: '927px',
    tablet: '1024px',
    tabletL: '1200px',
    laptop: '1440px',
    laptopL: '2560px'
}

const device = {
  mobileSS: `(max-width: ${size.mobileSS})`,
  mobileS: `(max-width: ${size.mobileS})`,
  mobileM: `(max-width: ${size.mobileM})`,
  mobile: `(max-width: ${size.mobile})`,
  tabletS: `(max-width: ${size.tabletS})`,
  tablet: `(max-width: ${size.tablet})`,
  tabletL: `(max-width: ${size.tabletL})`,
  laptop: `(max-width: ${size.laptop})`,
  laptopL: `(max-width: ${size.laptopL})`,
  desktop: `(max-width: ${size.desktop})`,
  desktopL: `(max-width: ${size.desktop})`
};

const colors = {
    textOnDark: '#FFFFFF',
    textOnDarkWeak: 'rgba(255, 255, 255, 0.7)',
    gradient: 'linear-gradient(270deg, #A181FF 6.12%, #5B72FF 47.18%, #F97583 94.69%)',
    backgrouondDark: '#121212'
}

const fonts = {
    main: 'Assistant'
}

const fontWeight = {
    extraLight: 200,
    light: 300,
    regular: 400,
    semiBold: 600
}

const fontSize = {
    fontSize0: "12px",
    fontSize1: "14px",
    fontSize2: "16px",
    fontSize3: "18px",
    fontSize4Mobile: "18px",
    fontSize4: "20px",
    fontSize5: "30px",
    fontSize5Mobile: "34px",
    fontSize6: "40px",
    fontSize7: "50px",
    fontSize7Mobile: "36px"
}

const pageWidth = {
    maxWidthXS: '20rem',
    maxWidthSM: '24rem',
    maxWidthMD: '28rem',
    maxWidthLG: '32rem',
    maxWidthXL: '36rem',
    maxWidth2XL: '42rem',
    maxWidth3XL: '48rem',
    maxWidth4XL: '56rem',
    maxWidth5XL: '1141.3px',
    nerrow: '1200px'
}

export {
    spacing,
    colors,
    fontWeight,
    fonts,
    fontSize,
    pageWidth,
    device
}; 