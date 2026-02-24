import styled from "styled-components"

export const CadastroCard = styled.div`
  max-width: 560px;
  margin: 28px auto;
  padding: 26px;
  background: #ffffff;
  border-radius: 14px;
  box-shadow: 0 8px 32px rgba(15, 45, 90, 0.06);
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
`

export const Logo = styled.img`
  width: 84px;
  height: 84px;
  object-fit: cover;
  border-radius: 12px;
  margin-bottom: 6px;
`

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
`

export const RolesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 8px 12px;
  margin-top: 6px;

  label {
    display: flex;
    align-items: center;
    gap: 8px;
    font-weight: 600;
    color: #174ea6;
    input {
      width: 18px;
      height: 18px;
    }
  }

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`

export const Actions = styled.div`
  display: flex;
  gap: 8px;
  justify-content: space-between; /* coloca o botão de voltar à esquerda e o submit à direita */
  align-items: center;
  margin-top: 6px;
  width: 100%;
`

export const RoleSelect = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`