import { Cards, Icone, Nome, Descricao } from "../../styles/VisitasHome"
import { Link } from "react-router-dom";
import { Titulo, PageContainer, Card as UiCard } from '../../components/ui/UiLibrary'

export const VisitasHome = () => {
    return (
        <PageContainer>
            <Titulo>Visitas Domiciliares</Titulo>
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