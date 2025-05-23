import LogoImg from '../assets/ubservices-logo.png'
import {
    Header,
    ContainerLogo,
    Logo,
    Nav,
    Item,  
    Title, 
    PerfilBtn, 
} from '../styles/NavBar'

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