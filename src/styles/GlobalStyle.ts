import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`

    body {
        background: var(--gray-100);
    }

    body::-webkit-scrollbar {
        width: 12px;               
    }

    body::-webkit-scrollbar-track {
        background: var(--gray-100);
        box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    }

    body::-webkit-scrollbar-thumb {
        background-color: var(--gray-50); 
        border-radius: 20px;       
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