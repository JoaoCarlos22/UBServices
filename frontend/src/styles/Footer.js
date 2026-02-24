import styled from 'styled-components'

export const FooterWrapper = styled.footer`
  background: #b5cef4ff; /* Cor primária do header, boa para o footer */
  color: #757575ff;
  padding: 30px 0 15px; /* Mais padding superior para destaque */
  margin-top: 60px;
`;

export const FooterInner = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 0 28px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start; /* Alinha o conteúdo das colunas no topo */
  gap: 30px; /* Mais espaço entre colunas */
  flex-wrap: wrap; /* Permite quebrar em telas menores */

  @media (max-width: 768px) {
    /* Ajuste para telas menores: duas colunas */
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 480px) {
    /* Ajuste para mobile: uma coluna */
    grid-template-columns: 1fr;
  }
`;

export const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 150px; /* Garante que as colunas tenham um tamanho mínimo */
  margin-bottom: 20px;
`;

export const FooterColumnLarge = styled(FooterColumn)`
  flex: 1.5;
`;

export const FooterLinks = styled.div`
  display: flex;
  flex-direction: column; /* Links em lista vertical */
  gap: 8px;

  a {
    color: #424242ff;
    text-decoration: none;
    font-size: 14px;
    opacity: 0.8;
    transition: opacity 0.2s;

    &:hover {
      opacity: 1; /* Efeito hover sutil */
      text-decoration: underline;
    }
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: 15px;

  a {
    color: #424242ff;
    opacity: 0.7;
    transition: opacity 0.2s, transform 0.2s;

    &:hover {
      opacity: 1;
      transform: translateY(-2px);
    }
  }
`;

export const Copy = styled.small`
  font-size: 13px;
  opacity: 0.7;
`;

export const FooterBottom = styled.div`
  border-top: 1px solid rgba(0,0,0,0.06);
  margin-top: 20px;
`;

export const FooterBottomInner = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 12px 28px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;