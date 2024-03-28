import { css } from "styled-components";

const resetStyle = css`
  * {
    margin: 0;
    padding: 0;
    font: inherit;
    color: inherit;
    font-family: "Pretendard Variable", sans-serif;
    font-family: "Pretendard Variable", sans-serif;
  }

  *,
  :after,
  :before {
    box-sizing: border-box;
    flex-shrink: 0;
  }

  :root {
    -webkit-tap-highlight-color: transparent;
    -webkit-text-size-adjust: 100%;
    text-size-adjust: 100%;
    cursor: default;
    line-height: 1.5;
    overflow-wrap: break-word;
    -moz-tab-size: 4;
    tab-size: 4;
  }

  html,
  body {
    height: 100%;
  }

  img,
  svg {
    display: block;
    max-width: 100%;
  }

  button {
    background: none;
    border: 0;
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  ol,
  ul {
    margin: 0px;
    padding: 0px;
  }

  h1 {
    font-size: 2em;
    font-weight: 600;
  }

  h2 {
    font-size: 1.5em;
    font-weight: 600;
  }
  h3 {
    font-size: 1.33em;
    font-weight: 600;
  }

  strong {
    font-weight: 700;
  }

  i {
    font-style: italic;
  }

  em {
    font-style: italic;
  }

  // 리액트 퀼 관련 css
  /* .ql-align-center {
    text-align: center;
  }

  .ql-align-right {
    text-align: right;
  }

  ol {
    list-style-type: decimal;
  }

  ul {
    list-style-type: disc;
  }

  blockquote {
    border-left: 4px solid #ccc;
    margin-bottom: 5px;
    margin-top: 5px;
    padding-left: 16px;
  } */
`;

export default resetStyle;
