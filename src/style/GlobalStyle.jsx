import { createGlobalStyle, css } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
    ${reset};

    :root {
      font-size: 62.5%;
    }
    * {
      box-sizing: border-box;
    }
    a {
      text-decoration: none;
      color: inherit;
      cursor: pointer;
    }
    a:visited {
      text-decoration: none;
      color: inherit;
    }
    img {
      width: 100%;
      vertical-align: top;
    }
    button {
      border: none;
      padding: 0;
      background-color: inherit;
      color: inherit;
      font: inherit;
      cursor: pointer;
    }
    input {
      font: inherit;
    }
`;

export const PageWrap = css`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ConWrap = css`
  width: 1280px;
  flex-grow: 1;
`;

export const LayoutWrap = css`
  margin: 0 auto;
`;

export const IR = css`
  position: absolute;
  clip-path: inset(50%);
  width: 1px;
  height: 1px;
  margin: -1px;
  overflow: hidden;
`;

export const Ellipsis = css`
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
