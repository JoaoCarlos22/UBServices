import { Cards, Icone, Nome, Descricao } from "../../styles/VisitasHome"
import { Link, useNavigate } from "react-router-dom";
import { Titulo, PageContainer, Card as UiCard } from '../../components/ui/UiLibrary'
import Button from '../../components/Button'

export const VisitasHome = () => {
    const navigate = useNavigate()
    return (
        <PageContainer>
            <div style={{ position: 'relative', width: '100%', marginBottom: 12 }}>
                <Button variant="ghost" onClick={() => navigate(-1)} aria-label="Voltar" style={{ position: 'absolute', left: 0 }}>←</Button>
                <Titulo style={{ margin: 0, textAlign: 'center' }}>Visitas Domiciliares</Titulo>
            </div>
            <Cards>
                <Link to="/cadVisita" style={{ textDecoration: 'none' }}>
                    <UiCard>
                        <Icone>📝</Icone>
                        <Nome>Solicitar Visita</Nome>
                        <Descricao>Registre uma nova solicitação de visita domiciliar para um paciente.</Descricao>
                    </UiCard>
                </Link>
                <Link to="/visitas" style={{ textDecoration: 'none' }}>
                    <UiCard>
                        <Icone>📋</Icone>
                        <Nome>Visualizar Visitas</Nome>
                        <Descricao>Veja todas as visitas agendadas e seus detalhes.</Descricao>
                    </UiCard>
                </Link>
            </Cards>
        </PageContainer>
    );
}