import { SearchTitle } from "../styles/globalStyle"
import { Hero,
        Overlay,
        SearchBar,
        ContainerServices,
        Card} from '../styles/Home'
import { Link } from "react-router-dom"
import { IconesCard, IconeSearch } from "../styles/Icones"
import SearchIcon from '../assets/search-icon.png'
import UbsIcon from '../assets/local-ubs-icon.png'
import ConsultaIcon from '../assets/consultas-icon.png'
import ServicosIcon from '../assets/servicos-icon.png'
import VacinasIcon from '../assets/vacinas-icon.png'
import ResultadosIcon from '../assets/resultados-icon.png'

export const Home = () => {
    return (
        <>
        <Hero>
            <Overlay>
                <SearchTitle>UBServices</SearchTitle>
                <SearchBar>
                    <input type="text" placeholder="O que você procura?" />
                    <button>
                        <IconeSearch src={SearchIcon} alt="Ícone Pesquisar"/>
                    </button>
                </SearchBar>
            </Overlay>
        </Hero>
            <ContainerServices style={{ gap: 12 }}>
                <Card className="light-blue">
                    <IconesCard src={UbsIcon} alt="UBS's mais próxima"/>
                    <h3>UBS's Mais Próximas</h3>
                </Card>
                <Card>
                    <IconesCard src={ConsultaIcon} alt="Ícone Consultas"/>
                    <h3>Minhas Consultas</h3>
                </Card>
                <Link to="/servicos" style={{ textDecoration: 'none' }}>
                    <Card className="light-blue">
                        <IconesCard src={ServicosIcon} alt="Ícone Serviços"/>
                        <h3>Serviços Disponíveis</h3>
                    </Card>
                </Link>
                <Card>
                    <IconesCard src={VacinasIcon} alt="Ícone Vacinas"/>
                    <h3>Vacinas</h3>
                </Card>
                <Card className="light-blue">
                    <IconesCard src={ResultadosIcon} alt="Ícone Resultados"/>
                    <h3>Meus Resultados</h3>
                </Card>
            </ContainerServices>
        </>
    )
}