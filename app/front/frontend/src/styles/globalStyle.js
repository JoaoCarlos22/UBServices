import { styled, createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle `
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        color: #333;
        font-family: 'Segoe UI', sans-serif;
    }`;

export const Title = styled.h1 `
    font-size: 30px;   
`

export const SearchTitle = styled(Title) `
    color: white;
    font-size: 40px;
    margin-bottom: 20px;
`