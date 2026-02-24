import styled from "styled-components"

export const LoginCard = styled.div`
  max-width: 420px;
  margin: 36px auto;
  padding: 28px;
  background: #fffcfcff;
  border-radius: 14px;
  box-shadow: 10px 8px 32px rgba(15, 45, 90, 0.06);
  display: flex;
  flex-direction: column;
  gap: 14px;
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

export const Actions = styled.div`
  display: flex;
  gap: 8px;
  justify-content: space-between;
  align-items: center;
  margin-top: 6px;
`