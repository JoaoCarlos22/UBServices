import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div `
    padding: 2rem;
    max-width: 600px;
    margin: 0 auto;
`
export const HeaderForm = styled.div `
    margin-bottom: 10px;
    text-align: center;
`
export const Form = styled.div `
    display: flex;
    flex-direction: column;
    padding: 30px;
    border: 1px solid #ddd;    
`
export const Label = styled.label `
    text-align: left;
    font-weight: bold;
    color: #2c3e50;
`
export const InputText = styled.input `
    padding: 0.5rem;
    border: 1px solid #ddd;
    border-radius: 4px;
    width: 100%;
    margin-bottom: 20px;
`
export const TextArea = styled.textarea `
    padding: 0.5rem;
    border: 1px solid #ddd;
    border-radius: 4px;
    min-height: 80px;
    resize: vertical;
    width: 100%;
    margin-bottom: 20px;
`
export const Submit = styled(Link) `
    grid-column: 2;
    background-color: #27ae60;
    color: white;
    border: none;
    padding: 0.75rem;
    border-radius: 4px;
    cursor: pointer;
    text-decoration: none;
    font-size: 1rem;
    transition: background-color 0.3s;
    margin-top: 1rem;

    &:hover{
        opacity: 0.8;
    }

    &:active{
        opacity: 0.6;
    }
`