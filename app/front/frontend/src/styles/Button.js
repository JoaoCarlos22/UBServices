import styled, { css } from 'styled-components'

const variants = {
  primary: css`
    background: #27ae60;
    color: #fff;
    &:hover { filter: brightness(1.03); transform: translateY(-2px); }
  `,
  secondary: css`
    background: linear-gradient(90deg, #1976d2 0%, #42a5f5 100%);
    color: #fff;
    &:hover { filter: brightness(1.03); transform: translateY(-2px); }
  `,
  ghost: css`
    background: transparent;
    color: #174ea6;
    border: 1.5px solid rgba(23,78,166,0.12);
    &:hover { background: rgba(23,78,166,0.05); }
  `,
}

export const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 0.65rem 1.2rem;
  border-radius: 10px;
  font-weight: 700;
  cursor: pointer;
  text-decoration: none;
  border: none;
  transition: transform 0.12s, box-shadow 0.12s, opacity 0.12s;
  ${(p) => variants[p.variant || 'primary']}

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`