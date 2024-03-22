export const breakpoints = {
  mobile: 360,
  tablet: 768,
  desktop: 1200,
};

const DESIGN_TOKEN = {
  color: {
    white: "#FFFFFF",
    black: {
      1: "#363636",
      2: "#505050",
      3: "#767676",
    },
    gray: {
      1: "#A8A8A8",
      2: "#DBDBDB",
      3: "#F6F6F6",
    },
    red: "#ED1C24",
    primary: {
      1: "#29C4BA",
      2: "#BCEBE8",
      3: "#F1F8F7",
    },
    secondary: "#FF9B52",
  },
  typography: {
    font11Regular: "font-size: 1.1rem; line-height: normal; font-weight: 400;",
    font12Regular: "font-size: 1.2rem; line-height: normal; font-weight: 400;",
    font12Medium: "font-size: 1.2rem; line-height: normal; font-weight: 500;",
    font12Semibold: "font-size: 1.2rem; line-height: normal; font-weight: 600;",
    font14Regular: "font-size: 1.4rem; line-height: 150%; font-weight: 400;",
    font14Medium: "font-size: 1.4rem; line-height: 150%; font-weight: 500;",
    font14Semibold: "font-size: 1.4rem; line-height: normal; font-weight: 600;",
    font14Bold: "font-size: 1.4rem; line-height: normal; font-weight: 700;",
    font16Regular: "font-size: 1.6rem; line-height: normal; font-weight: 400;",
    font16Medium: "font-size: 1.6rem; line-height: 150%;  font-weight: 500;",
    font16Semibold: "font-size: 1.6rem; line-height: normal;  font-weight: 600;",
    font16Bold: "font-size: 1.6rem; line-height: 130%; font-weight: 700;",
    font20Bold: "font-size: 2rem; line-height: normal; font-weight: 700;",
    font24Bold: "font-size: 2.4rem; line-height: 130%;  font-weight: 700;",
  },
  spacing: {
    mobile: "2rem",
    tablet: "3rem",
    desktop: "4rem",
  },
  mediaQueries: {
    mobile: `@media (min-width: ${breakpoints.mobile}px) and (max-width: ${breakpoints.tablet}px)`,
    tablet: `@media (min-width: ${breakpoints.tablet}px) and (max-width: ${breakpoints.desktop}px)`,
    desktop: `@media (min-width: ${breakpoints.desktop}px)`,
  },
  zIndex: {
    dropdown: "z-index: 20;",
    sticky: "z-index: 40;",
    popover: "z-index: 60;",
    default: "z-index: 1;",
    toast: "z-index: 120;",
    modal: "z-index: 100;",
  },
  boxShadow: {
    content: "0px 4px 20px rgba(0, 0, 0, 0.08)",
    floatingButton: "0px 0px 10px rgba(0, 0, 0, 0.10)",
  },
  overlayBackDropColor: "rgba(0, 0, 0, 0.60)",
};

export default DESIGN_TOKEN;
