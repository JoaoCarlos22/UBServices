import { styled, createGlobalStyle } from "styled-components";
import { Link } from 'react-router-dom'


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
    
export const Btn = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: linear-gradient(90deg, #1976d2 0%, #42a5f5 100%);
  color: #fff;
  font-weight: 600;
  font-size: 1.05rem;
  padding: 0.55rem 1.3rem;
  border: none;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(25, 118, 210, 0.10);
  text-decoration: none;
  letter-spacing: 0.5px;
  transition: background 0.18s, box-shadow 0.18s, transform 0.18s, opacity 0.18s;

  &:hover {
    cursor: pointer;
    box-shadow: 0 4px 18px rgba(25, 118, 210, 0.18);
    opacity: 0.93;
    transform: translateY(-2px) scale(1.03);
    text-decoration: none;
  }

  &:active {
    opacity: 0.8;
    transform: scale(0.98);
  }
`

export const BtnGreen = styled(Btn)`
  background: #27ae60;
`