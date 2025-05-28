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

export const Nav = styled.ul `
    display: flex;
    align-items: center;
    list-style: none;
    flex-wrap: wrap;
    gap: 1.5rem;
`

export const Item = styled.li `
    cursor: pointer;
    padding: 10px;
    transition: transform 0.5s;
    //transition: color 0.3s;

    &:hover{
        //background-color:rgba(51, 51, 51, 0.17);
        transform: translateY(-5px);
        border-bottom: 4px solid rgb(178, 212, 216);
        opacity: 0.9;
    }

`
export const PerfilBtn = styled.button `
    background:rgb(114, 191, 233);
    color:rgb(244, 249, 253);
    width: 150px;
    border: none;
    padding: 10px;
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
