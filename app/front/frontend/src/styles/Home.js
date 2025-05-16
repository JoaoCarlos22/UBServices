import styled from 'styled-components'

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
    padding: 30px;
    border: 1px solid #ddd;
    gap: 15px;
    align-items: center;
`

export const Label = styled.label `
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

export const Submit = styled.button `
    grid-column: 2;
    background-color: #27ae60;
    color: white;
    border: none;
    padding: 0.75rem;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1rem;
    transition: background-color 0.3s;
    margin-top: 1rem;
`