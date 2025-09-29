import { Container, Titulo, Cards, Card, Icone, Nome, Descricao } from "../../styles/VisitasHome"
import { Link } from "react-router-dom";

export const VisitasHome = () => {
    return (
        <Container>
            <Titulo>Visitas Domiciliares</Titulo>
            <Cards>
                <Link to="/cadVisita" style={{ textDecoration: 'none' }}>
                    <Card>
                        <Icone>📝</Icone>
                        <Nome>Solicitar Visita</Nome>
                        <Descricao>Registre uma nova solicitação de visita domiciliar para um paciente.</Descricao>
                    </Card>
                </Link>
                <Link to="/visitas" style={{ textDecoration: 'none' }}>
                    <Card>
                        <Icone>📋</Icone>
                        <Nome>Visualizar Visitas</Nome>
                        <Descricao>Veja todas as visitas agendadas e seus detalhes.</Descricao>
                    </Card>
                </Link>
            </Cards>
        </Container>
    );
}