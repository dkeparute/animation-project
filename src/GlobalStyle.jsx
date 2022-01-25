import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    margin:0;
    padding: 0;
    box-sizing: border-box;
}

body{
    font-family: 'Montserrat', sans-serif;
    background-color: #03091F;
    font-size: 1.2rem;
    font-weight: 400;
    color: white;
}

a{
    color: inherit;
    font-family: inherit;
    text-decoration: none;
}

p{
    line-height: 2rem;

}

.gradientText{
    background: linear-gradient(120deg, rgb(132, 111, 244), rgb(241, 118, 116));
    background-clip: text;
    display: inline-block;
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
}
`;

export default GlobalStyle;
