import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { PageContainer, Titulo } from '../../components/ui/UiLibrary'
import Button from '../../components/Button'
import { Container, TabsContainer, TabButton, TabContent, ContentSection } from '../../styles/Vacinas'
import { AgendaVacinacao } from './AgendaVacinacao'
import { CalendarioVacinacao } from './CalendarioVacinacao'
import { HistoricoVacinacao } from './HistoricoVacinacao'
import { CadernetaDigital } from './CadernetaDigital'

export const Vacinas = () => {
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState('agenda')

  // Dados de exemplo - vacinas disponíveis
  const vacinesDisponiveis = [
    { id: 1, nome: 'COVID-19', descricao: 'Proteção contra COVID-19', dosesRestantes: 1, proximaDose: '15/02/2025' },
    { id: 2, nome: 'Influenza', descricao: 'Proteção contra gripe', dosesRestantes: 0, proximaDose: 'Atualizada' },
    { id: 3, nome: 'Tétano', descricao: 'Proteção contra tétano', dosesRestantes: 1, proximaDose: '20/03/2025' },
    { id: 4, nome: 'Hepatite B', descricao: 'Proteção contra Hepatite B', dosesRestantes: 1, proximaDose: '10/02/2025' },
    { id: 5, nome: 'HPV', descricao: 'Proteção contra HPV', dosesRestantes: 2, proximaDose: '25/02/2025' },
  ]

  // Histórico de vacinação
  const historicoVacinas = [
    { id: 1, vacina: 'COVID-19', dose: '3ª dose', dataAplicacao: '15/01/2024', local: 'UBS Centro', profissional: 'Enfermeira Maria' },
    { id: 2, vacina: 'Influenza', dose: 'Dose única 2024', dataAplicacao: '10/03/2024', local: 'UBS Zona Norte', profissional: 'Técnico João' },
    { id: 3, vacina: 'Tétano', dose: '2ª dose', dataAplicacao: '20/05/2023', local: 'UBS Centro', profissional: 'Enfermeira Ana' },
    { id: 4, vacina: 'Hepatite B', dose: '1ª dose', dataAplicacao: '05/02/2023', local: 'UBS Zona Sul', profissional: 'Técnico Carlos' },
  ]

  // Calendário de vacinação recomendado
  const calendarioRecomendado = [
    { faixa: 'Recém-nascido', vacinas: 'BCG, Hepatite B (1ª)' },
    { faixa: '2 meses', vacinas: 'Pentavalente (1ª), Poliomielite, Rotavírus' },
    { faixa: '4 meses', vacinas: 'Pentavalente (2ª), Poliomielite, Rotavírus' },
    { faixa: '6 meses', vacinas: 'Pentavalente (3ª), Poliomielite, Influenza' },
    { faixa: '12 meses', vacinas: 'Sarampo, Caxumba, Rubéola' },
    { faixa: 'Adultos', vacinas: 'COVID-19, Influenza, Tétano (reforço a cada 10 anos)' },
  ]

  return (
    <PageContainer>
      <div style={{ position: 'relative', width: '100%', marginBottom: 12 }}>
        <Button
          variant="ghost"
          onClick={() => navigate(-1)}
          aria-label="Voltar"
          style={{ position: 'absolute', left: 0 }}
        >
          ←
        </Button>
        <Titulo style={{ margin: 0, textAlign: 'center' }}>Vacinação</Titulo>
      </div>

      <Container>
        {/* Abas de navegação */}
        <TabsContainer>
          <TabButton active={activeTab === 'agenda'} onClick={() => setActiveTab('agenda')}>
            📅 Agenda de Vacinação
          </TabButton>
          <TabButton active={activeTab === 'calendario'} onClick={() => setActiveTab('calendario')}>
            📋 Calendário Recomendado
          </TabButton>
          <TabButton active={activeTab === 'historico'} onClick={() => setActiveTab('historico')}>
            📝 Meu Histórico
          </TabButton>
          <TabButton active={activeTab === 'caderneta'} onClick={() => setActiveTab('caderneta')}>
            📄 Caderneta Digital
          </TabButton>
        </TabsContainer>

        {/* Conteúdo das abas */}
        <TabContent>
          {activeTab === 'agenda' && (
            <ContentSection>
              <AgendaVacinacao vacinesDisponiveis={vacinesDisponiveis} />
            </ContentSection>
          )}

          {activeTab === 'calendario' && (
            <ContentSection>
              <CalendarioVacinacao calendarioRecomendado={calendarioRecomendado} />
            </ContentSection>
          )}

          {activeTab === 'historico' && (
            <ContentSection>
              <HistoricoVacinacao historicoVacinas={historicoVacinas} />
            </ContentSection>
          )}

          {activeTab === 'caderneta' && (
            <ContentSection>
              <CadernetaDigital historicoVacinas={historicoVacinas} />
            </ContentSection>
          )}
        </TabContent>
      </Container>
    </PageContainer>
  )
}

export default Vacinas