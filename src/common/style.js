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
    mobileS: '325px',
    mobile: '733px',
    tablet: '1024px',
    laptop: '1440px',
    laptopL: '2560px'
}

const device = {
  mobileS: `(max-width: ${size.mobileS})`,
  mobileM: `(max-width: ${size.mobileM})`,
  mobile: `(max-width: ${size.mobile})`,
  tablet: `(max-width: ${size.tablet})`,
  laptop: `(max-width: ${size.laptop})`,
  laptopL: `(max-width: ${size.laptopL})`,
  desktop: `(max-width: ${size.desktop})`,
  desktopL: `(max-width: ${size.desktop})`
};

const colors = {
    textOnDark: '#FFFFFF',
    textOnDarkWeak: 'rgba(255, 255, 255, 0.7)'
}

const fonts = {
    main: 'Assistant'
}

const fontWeight = {
    extraLight: 300,
    semiBold: 600
}

const fontSize = {
    fontSize0: "12px",
    fontSize1: "14px",
    fontSize2: "16px",
    fontSize3: "18px",
    fontSize4: "20px",
    fontSize5: "30px",
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
    maxWidth5XL: '1141.3px'
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