import { Container,
    Titulo,
    Lista,
    Card,
    Icone,
    Nome,
    Descricao } from '../styles/Servicos'

export const Servicos = () => {

    const servicos = [
        {
            icone: '🩺',
            nome: 'Consultas Médicas',
            descricao: 'Agende e gerencie suas consultas com facilidade.'
        },
        {
            icone: '💉',
            nome: 'Vacinação',
            descricao: 'Confira o calendário de vacinação e agende suas doses.'
        },
        {
            icone: '🧪',
            nome: 'Exames Laboratoriais',
            descricao: 'Solicite e acompanhe seus exames laboratoriais.'
        },
        {
            icone: '🏥',
            nome: 'Visita Domiciliar',
            descricao: 'Receba atendimento médico no conforto da sua casa.'
        },
        {
            icone: '🩹',
            nome: 'Doação de Sangue',
            descricao: 'Encontre locais e agende sua doação de sangue.'
        },
        {
            nome: 'Campanhas de Saúde',
            icone: '📅',
            descricao: 'Participe das campanhas de saúde promovidas pela UBS.'
        }
    ];

    return (
        <Container>
            <Titulo>Serviços oferecidos pela UBS</Titulo>
            <Lista>
                {servicos.map((servico, idx) => (
                    <Card key={idx}>
                        <Icone>{servico.icone}</Icone>
                        <Nome>{servico.nome}</Nome>
                        <Descricao>{servico.descricao}</Descricao>
                    </Card>
                ))}
            </Lista>
        </Container>
    );
}