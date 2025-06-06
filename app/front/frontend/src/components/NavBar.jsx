import LogoImg from '../assets/ubservices-logo.png'
import {
    Header,
    ContainerLogo,
    Nav,
    Item,  
    PerfilBtn, 
} from '../styles/NavBar'
import { Logo } from '../styles/Icones';

import { Title } from '../styles/globalStyle';

const NavBar = () => {

    return (
        <Header>
            <ContainerLogo>
                <Logo src={LogoImg} alt="UBS Services" />
                <Title>UBServices</Title>
            </ContainerLogo>
            <Nav>
                <Item>Agendamento</Item>
                <Item>Área Médica</Item>
                <Item>Área do Paciente</Item>
                <Item>Suporte Técnico</Item>
            </Nav>
            <PerfilBtn>Login/Cadastro</PerfilBtn>
        </Header>
    );
}

export default NavBar