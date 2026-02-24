import styled from "styled-components";

// Container centralizado e espaçamento
export const Container = styled.div`
  max-width: 700px;
  margin: 40px auto;
  padding: 32px 24px;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 2px 16px rgba(0,0,0,0.08);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// Título grande e destacado
export const Titulo = styled.h1`
  font-size: 2.2rem;
  font-weight: bold;
  margin-bottom: 32px;
  color: #1a237e;
`;

// Cards em linha, responsivo
export const Cards = styled.div`
  display: flex;
  gap: 32px;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
`;

// Card com hover e sombra
export const Card = styled.div`
  background: #f5f7fa;
  border-radius: 12px;
  box-shadow: 0 1px 8px rgba(60,60,60,0.07);
  padding: 32px 24px;
  min-width: 240px;
  max-width: 320px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: box-shadow 0.2s, transform 0.2s;
  cursor: pointer;
  &:hover {
    box-shadow: 0 4px 24px rgba(60,60,60,0.15);
    transform: translateY(-4px) scale(1.03);
    background: #e3eafc;
  }
`;

// Ícone grande
export const Icone = styled.div`
  font-size: 2.8rem;
  margin-bottom: 16px;
`;

// Nome do card
export const Nome = styled.div`
  font-size: 1.25rem;
  font-weight: 600;
  color: #283593;
  margin-bottom: 8px;
`;

// Descrição do card
export const Descricao = styled.div`
  font-size: 1rem;
  color: #444;
  text-align: center;
  line-height: 1.4;
`;

// ...adicione mais estilos reutilizáveis conforme necessário...
