import { createGlobalStyle } from "styled-components";
import resetStyle from "./reset";

const GlobalStyles = createGlobalStyle`
${resetStyle}

html {
  font-size: 62.5%;
}

body {
  font-size: 1.6rem;
  font-family: "Pretendard";
  font-weight: 400;
}

@font-face {
    font-family: Pretendard;
    font-weight: 400;
    font-display: swap;
    src: url("../../public/fonts/Pretendard-Regular.woff") format("woff");
  }

  @font-face {
    font-family: Pretendard;
    font-weight: 500;
    font-display: swap;
    src: url("../../public/fonts/Pretendard-Medium.woff") format("woff");
  }

  @font-face {
    font-family: Pretendard;
    font-weight: 600;
    font-display: swap;
    src: url("../../public/fonts/Pretendard-SemiBold.woff") format("woff");
  }

  @font-face {
    font-family: Pretendard;
    font-weight: 700;
    font-display: swap;
    src: url("../../public/fonts/Pretendard-Bold.woff") format("woff");
  }

`;

export default GlobalStyles;
