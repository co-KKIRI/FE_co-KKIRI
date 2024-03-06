const breakpoints = {
  mobile: 360,
  tablet: 768,
  desktop: 1200,
};

const DESIGN_TOKEN = {
  color: {
    white: "#FFFFFF",
    black: {
      100: "#767676",
      200: "#505050",
      300: "#363636",
    },
    gray: {
      100: "#a8a8a8",
      200: "#dbdbdb",
      300: "#f6f6f6",
    },
    red: "#ED1C24",
    primary: {
      100: "#29C4BA",
      200: "#BCEBE8",
      300: "#29C4BA",
    },
    secondary: "#FF9B52",
  },
  typography: {
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
    mobile: `@media (min-width: ${breakpoints.mobile}px) and (max-width: ${breakpoints.tablet - 1}px)`,
    tablet: `@media (min-width: ${breakpoints.tablet}px) and (max-width: ${breakpoints.desktop - 1}px)`,
    desktop: `@media (min-width: ${breakpoints.desktop}px)`,
  },
  zIndex: {
    dropdown: "z-index: 20",
    sticky: "z-index: 40",
    popover: "z-index: 60",
    default: "z-index: 1",
    toast: "z-index: 120",
  },
  boxShadow: {
    card: "0px 2px 12px 0px rgba(0, 0, 0, 0.08)", // 확인 후 수정
    sidebar: "0px 4px 15px 0px rgba(0, 0, 0, 0.08)",
  },
  overlayBackDropColor: "rgba(0, 0, 0, 0.60)",
};

export default DESIGN_TOKEN;
