import React from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'
import {
  FooterWrapper,
  FooterInner,
  FooterColumn,
  FooterColumnLarge,
  FooterLinks,
  SocialLinks,
  Copy,
  FooterBottom,
  FooterBottomInner
} from '../styles/Footer'
import { Titulo } from '../components/ui/UiLibrary'

// Importe ícones (exemplo com react-icons)
import { FaHospital, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa' // Necessário instalar: npm install react-icons

export const Footer = () => {
  return (
    <FooterWrapper>
      <FooterInner>
        {/* Coluna 1: Logo e Institucional */}
        <FooterColumnLarge>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
            <FaHospital size={24} color="#000000ff" />
            <Titulo style={{ fontSize: 20, margin: 0, color: '#000000ff' }}>UBServices</Titulo>
          </div>
          <Copy style={{ marginTop: 8 }}>Cuidando da sua saúde com a conveniência digital.</Copy>
          <p style={{ margin: '10px 0 0', fontSize: 14, color: '#9e9e9e' }}>
            <a href="mailto:contato@ubservices.com" style={{ color: '#000000ff', textDecoration: 'none', opacity: 0.8 }}>contato@ubservices.com</a>
          </p>
        </FooterColumnLarge>

        {/* Coluna 2: Navegação Rápida */}
        <FooterColumn>
          <Titulo style={{ fontSize: 16, margin: '0 0 10px 0', color: '#000000ff', fontWeight: 'bold' }}>
            Navegação
          </Titulo>
          <FooterLinks>
            <Link to="/servicos">Serviços</Link>
            <Link to="/agendamento">Agendamento</Link>
            <Link to="/area-paciente">Área do Paciente</Link>
            <Link to="/suporte">Suporte Técnico</Link>
          </FooterLinks>
        </FooterColumn>

        {/* Coluna 3: Institucional e Legal */}
        <FooterColumn>
          <Titulo style={{ fontSize: 16, margin: '0 0 10px 0', color: '#000000ff', fontWeight: 'bold' }}>
            Legal
          </Titulo>
          <FooterLinks>
            <Link to="/sobre">Sobre Nós</Link>
            <Link to="/visita-domiciliar">Visitas</Link>
            <Link to="/termos">Termos de Uso</Link>
            <Link to="/politica-privacidade">Política de Privacidade</Link>
          </FooterLinks>
        </FooterColumn>
        
        {/* Coluna 4: Social */}
        <FooterColumn>
          <Titulo style={{ fontSize: 16, margin: '0 0 10px 0', color: '#000000ff', fontWeight: 'bold' }}>Siga-nos</Titulo>
          <SocialLinks>
            <a href="https://facebook.com" aria-label="Facebook"><FaFacebook size={24} /></a>
            <a href="https://instagram.com" aria-label="Instagram"><FaInstagram size={24} /></a>
            <a href="https://twitter.com" aria-label="Twitter/X"><FaTwitter size={24} /></a>
          </SocialLinks>
        </FooterColumn>

      </FooterInner>

      {/* Faixa de Copyright e Botão Topo - Abaixo das Colunas */}
      <FooterBottom>
        <FooterBottomInner>
          <Copy>© {new Date().getFullYear()} UBServices. Todos os direitos reservados.</Copy>
        </FooterBottomInner>
      </FooterBottom>
    </FooterWrapper>
  )
}

export default Footer