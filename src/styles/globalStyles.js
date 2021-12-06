import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
    * {
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
    outline: 0;
    border: 0;
    }

    :root {
    --primary: #1CB5E0;
    --blue-one: #0040A0;
    --grey-one: #52698B;
    --grey-two: #BBC1CB;
    --dark: #606060;
    --background: #FCFEFF
    }


    html,
    body {
        background: var(--background);
        scroll-behavior: smooth;
        -webkit-font-smoothing: antialiased;
        display: flex;
        
        &::-webkit-scrollbar {
            display: none;
        }
        -ms-overflow-style: none; 
        scrollbar-width: none;  

    }

    a {
        color: inherit;
        text-decoration: none;
    }

    a, button {
        cursor: pointer;
    }

    h2 {
        color: var(--blue-one);
        font-size: 1.75rem
    }

    h3 {
        color: var(--blue-one);
        font-size: 1.25rem;
    }

`;
 
export default GlobalStyle;