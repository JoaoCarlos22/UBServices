import styled from 'styled-components'
import { Link } from 'react-router-dom'

// Container principal com visual moderno e responsivo
export const Container = styled.div`
    max-width: 800px;
    margin: 48px auto;
    padding: 40px 32px;
    background: linear-gradient(120deg, #e3f0ff 0%, #f8fbff 100%);
    border-radius: 20px;
    box-shadow: 0 4px 32px rgba(30,60,120,0.10);
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (max-width: 900px) {
        padding: 24px 8px;
    }
`

export const HeaderForm = styled.div`
    margin-bottom: 32px;
    text-align: center;
    h2 {
        font-size: 2.3rem;
        font-weight: 700;
        color: #0d47a1;
        margin: 0;
        letter-spacing: 1px;
    }
`

// Grid para campos do formulário, responsivo
export const FormGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 28px 36px;
    width: 100%;
    max-width: 800px;

    @media (max-width: 700px) {
        grid-template-columns: 1fr;
        gap: 18px 0;
    }
`;

// Linha completa que ocupa as duas colunas do grid
export const FullRow = styled.div`
    grid-column: 1 / 3;
    width: 100%;
`;

// Área de ações (botões) alinhada à direita
export const Actions = styled.div`
    grid-column: 1 / 3;
    display: flex;
    justify-content: flex-end;
`;

// Form wrapper para controlar espaçamento e responsive
export const Form = styled.form`
    width: 100%;
`;

export const Label = styled.label`
    text-align: left;
    font-weight: 600;
    color: #174ea6;
    margin-bottom: 6px;
    font-size: 1.08rem;
    letter-spacing: 0.2px;
`

export const InputText = styled.input`
    padding: 0.7rem;
    border: 1.5px solid #b0bec5;
    border-radius: 8px;
    width: 100%;
    margin-bottom: 8px;
    font-size: 1.08rem;
    background: #f4f8fb;
    transition: border 0.2s, background 0.2s;
    &:focus {
        border: 2px solid #1976d2;
        outline: none;
        background: #e3eafc;
    }
`

export const TextArea = styled.textarea`
    padding: 0.7rem;
    border: 1.5px solid #b0bec5;
    border-radius: 8px;
    min-height: 90px;
    resize: vertical;
    width: 100%;
    margin-bottom: 8px;
    font-size: 1.08rem;
    background: #f4f8fb;
    transition: border 0.2s, background 0.2s;
    &:focus {
        border: 2px solid #1976d2;
        outline: none;
        background: #e3eafc;
    }
`

export const Submit = styled(Link)`
    background-color: #27ae60;
    color: #fff;
    border: none;
    padding: 0.85rem 2.2rem;
    border-radius: 8px;
    cursor: pointer;
    text-decoration: none;
    font-size: 1.15rem;
    font-weight: 700;
    box-shadow: 0 2px 8px rgba(30,60,120,0.08);
    margin-top: 18px;
    align-self: flex-end;
    letter-spacing: 0.5px;
    transition: background 0.2s, opacity 0.2s, box-shadow 0.2s;

    &:hover {
        background: linear-gradient(90deg, #1565c0 0%, #388e3c 100%);
        opacity: 0.93;
        box-shadow: 0 4px 16px rgba(30,60,120,0.13);
    }

    &:active {
        opacity: 0.8;
    }
`