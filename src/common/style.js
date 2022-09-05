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
    mobileS: '320px',
    mobileS: '375px',
    mobileM: '425px',
    mobileL: '768px',
    tablet: '1024px',
    laptop: '1440px',
    laptopL: '2560px'
}

const device = {
  mobileS: `(max-width: ${size.mobileS})`,
  mobileM: `(max-width: ${size.mobileM})`,
  mobileL: `(max-width: ${size.mobileL})`,
  tablet: `(max-width: ${size.tablet})`,
  laptop: `(max-width: ${size.laptop})`,
  laptopL: `(max-width: ${size.laptopL})`,
  desktop: `(max-width: ${size.desktop})`,
  desktopL: `(max-width: ${size.desktop})`
};

const colors = {
    background: '#FFFFFF',
    text: '#37352f',
    textOnAccent: '#FFFFFF',
    accent: '#4240EA',
    lightGrey: '#fbfbfa',
    accentDeep: '#2623ea'
}

const fonts = {
    main: 'Assistant'
}

const fontSize = {
    fontSizeTiny: '0.6rem',
    fontSizeSmall: '0.7rem',
    fontSize0: '0.833rem',
    fontSize1: '1rem',
    fontSize2: '1.2rem',
    fontSize3: '1.44rem',
    fontSize4: '1.728rem',
    fontSize5: '2.074rem',
    fontSize6: '2.488rem',
    fontSize7: '2.986rem',
    fontSize8: '69.33333333333333px',
    fontSize9: '40px',
    fontSize9Mobile: '30px',
    fontSize32: '32px',
    fontSize21: '21.3px',
    fontSize25: '25.3px',
    headerMobile: '70px'
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
    fonts,
    fontSize,
    pageWidth,
    device
}; 