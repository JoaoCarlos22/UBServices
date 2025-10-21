import LogoImg from '../assets/ubservices-logo.png'
import {
    Header,
    ContainerLogo,
    Nav,
    Item,
} from '../styles/NavBar'
import { Logo } from '../styles/Icones';
import {Link} from 'react-router-dom';
import Button from './Button';
import { Title } from '../styles/globalStyle';

const NavBar = () => {

    return (
        <Header>
            <Link to="/" style={{ textDecoration: 'none' }}>
                <ContainerLogo>
                    <Logo src={LogoImg} alt="UBS Services" />
                    <Title>UBServices</Title>
                </ContainerLogo>
            </Link>
            <Nav>
                <Item>Agendamento</Item>
                <Item>Área Médica</Item>
                <Item>Área do Paciente</Item>
                <Item>Suporte Técnico</Item>
            </Nav>
            <Button to="/login" variant="secondary">Login/Cadastro</Button>
        </Header>
    );
}

export default NavBar