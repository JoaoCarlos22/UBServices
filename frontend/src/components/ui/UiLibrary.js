import styled from 'styled-components'
import { Link } from 'react-router-dom'

/* Container principal centralizado */
export const PageContainer = styled.div`
  max-width: 960px;
  margin: 32px auto;
  padding: 28px;
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

/* Header do formulário reutilizável */
export const HeaderForm = styled.header`
  text-align: left;
  h2 {
    font-size: 1.9rem;
    color: #0d47a1;
    margin: 0;
  }
`;

export const Titulo = styled.h1`
	text-align: center;
	margin-bottom: 10px;
`;

/* Grid responsivo para formulários */
export const FormGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px 28px;
  width: 100%;
  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;

/* Linha que ocupa as duas colunas */
export const FullRow = styled.div`
  grid-column: 1 / 3;
  @media (max-width: 700px) {
    grid-column: 1;
  }
`;

/* Label padrão */
export const Label = styled.label`
  display: block;
  font-weight: 600;
  color: #174ea6;
  margin-bottom: 6px;
`;

/* Input text reutilizável */
export const Input = styled.input`
  padding: 0.7rem;
  border: 1.5px solid #b0bec5;
  border-radius: 8px;
  width: 100%;
  background: #f4f8fb;
  font-size: 1rem;
  &:focus {
    border-color: #1976d2;
    outline: none;
    background: #eaf2ff;
  }
`;

/* Textarea reutilizável */
export const TextArea = styled.textarea`
  padding: 0.7rem;
  border: 1.5px solid #b0bec5;
  border-radius: 8px;
  width: 100%;
  min-height: 96px;
  resize: vertical;
  background: #f4f8fb;
  font-size: 1rem;
  &:focus {
    border-color: #1976d2;
    outline: none;
    background: #eaf2ff;
  }
`;

/* Botão primário reutilizável (Link ou button) */
export const PrimaryButton = styled.button`
  background: #27ae60;
  color: #fff;
  font-weight: 700;
  padding: 0.7rem 1.4rem;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  transition: transform 0.12s, box-shadow 0.12s, opacity 0.12s;
  &:hover { transform: translateY(-2px); box-shadow: 0 6px 18px rgba(0,0,0,0.08); }
  &:disabled { opacity: 0.6; cursor: not-allowed; transform: none; box-shadow: none; }
`;

/* Badge de caminho reutilizável */
export const PathBadge = styled.div`
  padding: 8px 12px;
  background: rgb(233,235,245);
  border: 1px solid rgba(51,51,51,0.41);
  border-radius: 6px;
  font-weight: bold;
  width: fit-content;
`;

/* Pequeno Card para visão geral (ex: VisitasHome) */
export const Card = styled.div`
  max-width: 320px;
  background: #f5f7fa;
  display: flex;
	flex-direction: column;
	align-items: center;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.06);
  transition: box-shadow 0.2s;
	&:hover {
		box-shadow: 0 4px 16px rgba(0,0,0,0.13);
	}
`;

/* Link estilizado compatível com roteamento */
export const LinkBtn = styled(Link)`
  text-decoration: none;
`;

/* Export padrão vazio (apenas named exports usados) */