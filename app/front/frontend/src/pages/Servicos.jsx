import { Lista, Icone, Nome, Descricao } from '../styles/Servicos'
import { Titulo, PageContainer, Card as UiCard } from '../components/ui/UiLibrary'
import { Link, useNavigate } from "react-router-dom";
import Button from '../components/Button'

export const Servicos = () => {
    const navigate = useNavigate()
    const servicos = [
        {
            icone: '🩺',
            nome: 'Consultas Médicas',
            descricao: 'Agende e gerencie suas consultas com facilidade.',
            rota: '/consultas'
        },
        {
            icone: '💉',
            nome: 'Vacinação',
            descricao: 'Confira o calendário de vacinação e agende suas doses.',
            rota: '/vacinas'
        },
        {
            icone: '🧪',
            nome: 'Exames Laboratoriais',
            descricao: 'Solicite e acompanhe seus exames laboratoriais.',
            rota: '/exames'
        },
        {
            icone: '🏥',
            nome: 'Visita Domiciliar',
            descricao: 'Receba atendimento médico no conforto da sua casa.',
            rota: '/visita-domiciliar'
        },
        {
            icone: '🩹',
            nome: 'Doação de Sangue',
            descricao: 'Encontre locais e agende sua doação de sangue.',
            rota: '/doacao-sangue'
        },
        {
            nome: 'Campanhas de Saúde',
            icone: '📅',
            descricao: 'Participe das campanhas de saúde promovidas pela UBS.',
            rota: '/campanhas-saude'
        }
    ];

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
                <Titulo style={{ margin: 0, textAlign: 'center' }}>Serviços oferecidos pela UBS</Titulo>
            </div>
            
            <Lista>
                {servicos.map((servico, idx) => (
                    <Link to={servico.rota} key={idx} style={{ textDecoration: 'none' }}>
                        <UiCard>
                            <Icone>{servico.icone}</Icone>
                            <Nome>{servico.nome}</Nome>
                            <Descricao>{servico.descricao}</Descricao>
                        </UiCard>
                    </Link>
                ))}
            </Lista>
        </PageContainer>
    );
}