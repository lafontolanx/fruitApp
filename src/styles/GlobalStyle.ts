import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`

    body {
        background: var(--gray-100);
    }

    :root {
        --gray-50: #939393;
        --gray-100: #f5f5f5;
        --white: #fff;
        --black: #000;
        --green: #3BAD61;
        --orange: #F1981B;
    }

    * {
        margin: 0;
        padding: 0;
        font-family: 'Poppins', sans-serif;
    }
    
`