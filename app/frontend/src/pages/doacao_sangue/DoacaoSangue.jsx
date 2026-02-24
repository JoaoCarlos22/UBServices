import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { PageContainer, Titulo } from '../../components/ui/UiLibrary'
import Button from '../../components/Button'
import { Container, TabsContainer, TabButton, TabContent, ContentSection } from '../../styles/DoacaoSangue'
import { InformacoesDoacaoSangue } from './InformacoesDoacao'
import { LocaisDoacaoSangue } from './LocaisDoacao'
import { HistoricoDoacoes } from './HistoricoDoacoes'
import { AgendarDoacao } from './AgendarDoacao'

export const DoacaoSangue = () => {
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState('informacoes')

  // Dados de exemplo - locais de doação
  const locaisDoacao = [
    { 
      id: 1, 
      nome: 'Hemocentro Central', 
      endereco: 'Av. Principal, 1000 - Centro',
      telefone: '(11) 3333-4444',
      horario: 'Seg a Sex: 7h às 18h | Sáb: 8h às 12h',
      tiposSanguineos: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']
    },
    { 
      id: 2, 
      nome: 'Hemocentro Zona Norte', 
      endereco: 'Rua das Flores, 500 - Zona Norte',
      telefone: '(11) 3333-5555',
      horario: 'Seg a Sex: 8h às 17h',
      tiposSanguineos: ['A+', 'O+', 'B+', 'AB+']
    },
    { 
      id: 3, 
      nome: 'Hospital São Lucas', 
      endereco: 'Av. Saúde, 2000 - Zona Sul',
      telefone: '(11) 3333-6666',
      horario: 'Seg a Sex: 7h às 16h | Sáb: 7h às 11h',
      tiposSanguineos: ['A+', 'A-', 'O+', 'O-']
    },
    { 
      id: 4, 
      nome: 'UBS Zona Leste', 
      endereco: 'Rua do Progresso, 300 - Zona Leste',
      telefone: '(11) 3333-7777',
      horario: 'Seg a Sex: 8h às 15h',
      tiposSanguineos: ['O+', 'A+']
    },
  ]

  // Histórico de doações do usuário
  const historicoDoacoes = [
    { 
      id: 1, 
      data: '15/11/2024', 
      local: 'Hemocentro Central',
      tipoSangue: 'O+',
      volume: '450ml',
      status: 'Concluída'
    },
    { 
      id: 2, 
      data: '20/08/2024', 
      local: 'Hospital São Lucas',
      tipoSangue: 'O+',
      volume: '450ml',
      status: 'Concluída'
    },
    { 
      id: 3, 
      data: '10/05/2024', 
      local: 'Hemocentro Central',
      tipoSangue: 'O+',
      volume: '450ml',
      status: 'Concluída'
    },
  ]

  // Informações sobre requisitos e benefícios
  const informacoes = {
    requisitos: [
      'Ter entre 16 e 69 anos (menores de 18 com autorização)',
      'Pesar no mínimo 50kg',
      'Estar em bom estado de saúde',
      'Estar descansado (mínimo 6h de sono)',
      'Estar bem alimentado',
      'Apresentar documento de identidade com foto'
    ],
    impedimentos: [
      'Gripe, resfriado ou febre nos últimos 7 dias',
      'Gravidez ou amamentação',
      'Tatuagem ou piercing nos últimos 12 meses',
      'Uso de drogas ilícitas',
      'Ter ingerido bebida alcoólica nas últimas 12 horas',
      'Doenças transmissíveis pelo sangue'
    ],
    beneficios: [
      'Salvar até 4 vidas com uma única doação',
      'Check-up gratuito de saúde',
      'Renovação das células sanguíneas',
      'Redução do risco de doenças cardiovasculares',
      'Satisfação de ajudar o próximo',
      'Meia-entrada em eventos culturais (em alguns estados)'
    ],
    intervalo: {
      homens: '60 dias (máximo 4 doações por ano)',
      mulheres: '90 dias (máximo 3 doações por ano)'
    }
  }

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
        <Titulo style={{ margin: 0, textAlign: 'center' }}>Doação de Sangue</Titulo>
      </div>

      <Container>
        {/* Abas de navegação */}
        <TabsContainer>
          <TabButton active={activeTab === 'informacoes'} onClick={() => setActiveTab('informacoes')}>
            ℹ️ Informações
          </TabButton>
          <TabButton active={activeTab === 'locais'} onClick={() => setActiveTab('locais')}>
            📍 Locais de Doação
          </TabButton>
          <TabButton active={activeTab === 'agendar'} onClick={() => setActiveTab('agendar')}>
            📅 Agendar Doação
          </TabButton>
          <TabButton active={activeTab === 'historico'} onClick={() => setActiveTab('historico')}>
            📝 Meu Histórico
          </TabButton>
        </TabsContainer>

        {/* Conteúdo das abas */}
        <TabContent>
          {activeTab === 'informacoes' && (
            <ContentSection>
              <InformacoesDoacaoSangue informacoes={informacoes} />
            </ContentSection>
          )}

          {activeTab === 'locais' && (
            <ContentSection>
              <LocaisDoacaoSangue locaisDoacao={locaisDoacao} />
            </ContentSection>
          )}

          {activeTab === 'agendar' && (
            <ContentSection>
              <AgendarDoacao locaisDoacao={locaisDoacao} />
            </ContentSection>
          )}

          {activeTab === 'historico' && (
            <ContentSection>
              <HistoricoDoacoes historicoDoacoes={historicoDoacoes} />
            </ContentSection>
          )}
        </TabContent>
      </Container>
    </PageContainer>
  )
}

export default DoacaoSangue