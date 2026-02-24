import styled from "styled-components";
import Banner from '../assets/ubs-banner.jpg'

//const backgroundColor = ""

export const Hero = styled.div `
    background-image: url('${Banner}');
    background-size: cover;
    background-position: center;
    height: 320px;
    position: relative;
`

export const Overlay = styled.div `
    background: rgba(0,0,0,0.5);
    height: 100%;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const SearchBar = styled.div `
    display: flex;
    background: white;
    border-radius: 25px;
    overflow: hidden;

    input {
        border: none;
        outline: none;
        padding: 10px 20px;
        width: 300px;
        font-size: 16px;
    }

    button {
        //background:rgb(229, 251, 253);
        ///color: white;
        border: none;
        padding: 0 20px;
        cursor: pointer;
    }
`

export const ContainerServices = styled.div `
    display: flex;
    justify-content: center;
    padding: 40px 20px;
    flex-wrap: wrap;
    //background: linear-gradient(to right, #ff9966, #00bcd4);
`

export const Card = styled.div.attrs(()=> ({ tabIndex: 0}))`
    //background-color:rgba(141, 215, 255, 0.84);
    background-color: #CAE8BD;
    width: 180px;
    height: 160px;
    border-radius: 12px;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.18);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 15px;
    text-align: center;
    transition: transform 0.2s;
    cursor: pointer;

    &.light-blue {
        background-color: #BBFBFF;
    }

    h3 {
        margin-top: 20px;
        font-size: 15px;
        opacity: 0.8;
    }

    &:hover {
        transform: translateY(-5px);
    }
`