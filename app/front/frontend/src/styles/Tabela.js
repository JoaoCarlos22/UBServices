import styled from "styled-components"

export const ContainerTabela = styled.div `
    width: 100%;
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    padding: 33px 30px;
`

export const WrapTable = styled.div `
    width: 1000px;
`

export const Tabela = styled.table `
    border-spacing: 1;
    background: white;
    border-radius: 10px;
    overflow: hidden;
    width: 100%;
    margin: 0 auto;
    position: relative;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
`

export const Thead = styled.thead `
    background-color:rgb(181, 201, 221);
    font-weight: bold;
`

export const Head = styled.th `
    padding: 12px 15px;
    width: 0px;
    text-align: center;
`

export const Linha = styled.tr `
    cursor: pointer;
    background-color:rgb(232, 237, 242);
    width: 0px;
    text-align: center;
    &:hover {
        opacity: 0.8;
    }
`

export const Body = styled.td `
    padding: 12px 15px;
    
`