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
        --color-button-hover: linear-gradient( to bottom, #3d973d 0%, #6faf72 9%, #3d973d 18%, #37d437 92%, #666 100%);
        --color-taskbar: linear-gradient( to bottom, #245edb 0%, #0c8dea 9%, #245edb 18%, #245edb 92%, #333 100%) center/cover no-repeat;
        --color-white: #FFFFFF;

        --font-main: 'Arial', sans-serif;

        --background-main: url(${backgroundMain});
    }

    body {
        max-width: 100vw;
        max-height: 100vh;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

    }
`