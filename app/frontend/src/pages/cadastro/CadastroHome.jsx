import { useNavigate } from "react-router-dom"
import { PageContainer, Titulo } from "../../components/ui/UiLibrary"
import Button from "../../components/Button"
import { AreaGrid, AreaCard } from "../../styles/CadHome"

export const CadastroHome = () => {
  const navigate = useNavigate()
  return (
    <PageContainer>
      <div style={{ position: 'relative', width: '100%', marginBottom: 12 }}>
        <Button variant="ghost" onClick={() => navigate(-1)} aria-label="Voltar" style={{ position: 'absolute', left: 0 }}>←</Button>
        <Titulo style={{ margin: 0, textAlign: 'center' }}>Escolha sua área</Titulo>
      </div>
      <AreaGrid>
        <AreaCard>
          <h3>Área do Paciente</h3>
          <p>Cadastre-se como paciente para agendar e acompanhar serviços.</p>
          <Button onClick={() => navigate("/cadastrar/paciente")} variant="primary">
            Sou Paciente
          </Button>
        </AreaCard>

        <AreaCard>
          <h3>Área Médica</h3>
          <p>Cadastre-se como profissional (médico, enfermeiro, atendente, gerente).</p>
          <Button onClick={() => navigate("/cadastrar/medico")} variant="secondary">
            Sou Profissional
          </Button>
        </AreaCard>
      </AreaGrid>
    </PageContainer>
  )
}