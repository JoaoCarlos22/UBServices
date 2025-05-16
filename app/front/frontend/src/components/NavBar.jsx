import {
    Nav,
    Lista,
    Item,  
    Title, 
    PerfilBtn, 
} from '../styles/NavBar'

const NavBar = () => {
    return (
        <Nav>
            <Title>UBS Services</Title>
            <Lista>
                <Item>Agendamento</Item>
                <Item>Área Médica</Item>
                <Item>Área do Paciente</Item>
                <Item>Suporte Técnico</Item>
            </Lista>
            <PerfilBtn>Olá, Carolyna!</PerfilBtn>
        </Nav> 
    );
}

export default NavBar