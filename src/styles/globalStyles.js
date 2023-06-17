import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root {
        --color-button: linear-gradient( to bottom, #3d973d 0%, #6faf72 9%, #3d973d 18%, #3d973d 92%, #666 100%);
        
        --font-main: 'Arial', sans-serif;
    }

    body {
        max-width: 100vw;
        height: 100vh;
        font-family: var(--font-main);

    }
`