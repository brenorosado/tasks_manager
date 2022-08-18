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

    ::-webkit-scrollbar {
        width: 0.3vw;
    }

    ::-webkit-scrollbar-track {
        background: #181818;
    }

    ::-webkit-scrollbar-thumb {
        background: #222;
        border-radius: 2vw;
    }

    ::-webkit-scrollbar-thumb:hover {
        background: #333;
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
