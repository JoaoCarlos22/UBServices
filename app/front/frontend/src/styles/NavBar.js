import styled from 'styled-components'

export const Header = styled.header `
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: white;
    padding: 15px 30px;
    //box-shadow: 0 2px 5px rgba(0,0,0,0.5);
`

export const ContainerLogo = styled.div `
    display: flex;
    align-items: center;
    gap: 10px;
`

export const Logo = styled.img `
    height: 50px;
    width: 50px;
`

export const Nav = styled.ul `
    display: flex;
    align-items: center;
    list-style: none;
    flex-wrap: wrap;
    gap: 1.5rem;
`
export const Title = styled.h1 `
    font-size: 1.8rem;
    margin-right: 2rem;   
`
export const Item = styled.li `
    cursor: pointer;
    padding: 10px;
    transition: color 0.3s;

    &:hover{
        background-color:rgba(51, 51, 51, 0.17);
        border-bottom: 1px solid #333333;
        opacity: 0.8;
    }

`
export const PerfilBtn = styled.button `
    background: #00bcd4;
    color: white;
    border: none;
    padding: 8px 8px;
    border-radius: 20px;
    font-weight: bold;
    cursor: pointer;

    &:hover{
        opacity: 0.8;
    }

    &:active{
        opacity: 0.6;
    }

`
