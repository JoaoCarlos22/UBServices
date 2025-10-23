import styled from "styled-components"

export const AreaGrid = styled.div`
  max-width: 800px;
  margin: 24px auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 18px;
  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`

export const AreaCard = styled.div`
  padding: 22px;
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(15,45,90,0.04);
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: flex-start;
  h3 { margin: 0; color: #0d47a1; }
  p { margin: 0; color: #444; }
`