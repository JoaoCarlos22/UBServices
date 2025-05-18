import styled from 'styled-components'

export const Nav = styled.div `
    background-color: #2c3e50;
    display: flex;
    color: white;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 10px;
`
export const Title = styled.h1 `
    font-size: 1.8rem;
    margin-right: 2rem;
`
export const Lista = styled.ul `
    display: flex;
    list-style: none;
    gap: 1.5rem;
`
export const Item = styled.li `
    cursor: pointer;
    padding: 0.5rem;
    transition: color 0.3s;

    &:hover{
        opacity: 0.8;
    }

`
export const PerfilBtn = styled.button `
    background-color: #3498db;
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover{
        opacity: 0.8;
    }

    &:active{
        opacity: 0.6;
    }

`
