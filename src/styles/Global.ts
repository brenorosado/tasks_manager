import { createGlobalStyle } from "styled-components";

export const COLORS = {
  black: "#161616"
};

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Overpass, sans-serif;
    }

    h1 {
        font-size: clamp(48px, 2.5vw, 2.5vw);
        font-weight: normal;
        text-align: center;
    }

    h2 {
        font-size: clamp(36px, 1.875vw, 1.875vw);
        font-weight: normal;
        text-align: center;
    }
`;
