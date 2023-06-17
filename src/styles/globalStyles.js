import { createGlobalStyle } from "styled-components";
import backgroundMain from "../assets/img/background-main.jpg"


export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root {
        --color-button: linear-gradient( to bottom, #3d973d 0%, #6faf72 9%, #3d973d 18%, #3d973d 92%, #666 100%);

        --font-main: 'Arial', sans-serif;

        --background-main: url(${backgroundMain});
    }

    body {
        max-width: 100vw;
        max-height: 100vh;
        font-family: var(--font-main);

    }
`