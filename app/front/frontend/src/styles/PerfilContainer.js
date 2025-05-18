import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div `
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px 0;
    height: 110px;
    border-bottom: 1px solid rgba(51, 51, 51, 0.43);
`

export const Voltar = styled.div `
    position: absolute;
    left: 20px;
    top: 30px;
`

export const BtnVoltar = styled(Link) `
    background: none;
    border: 1px solid #333333;
    font-size: 16px;
    text-decoration: none;
    padding: 8px 16px;
    color: #333;
    cursor: pointer;
    font-weight: bold;
`

export const ContainerPerfil = styled.div `
    display: flex;
    align-items: center;
    gap: 15px;
`

export const H2 = styled.h2 `
    font-size: 18px;
    font-weight: bold;
`

export const P = styled.p `
    font-size: 14px;
    color: #666;
    margin-bottom: 10px;
`