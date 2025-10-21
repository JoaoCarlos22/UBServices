import { Image } from "../styles/Image"
import {Container, Voltar, ContainerPerfil, H2, P} from '../styles/PerfilContainer'
import { Btn } from "../styles/globalStyle"

export const PerfilContainer = ({route}) => {
    return (
        <Container>
            <Voltar>
                <Btn to={route}> VOLTAR</Btn>
            </Voltar>

            <ContainerPerfil>
                <Image src="foto_caroline.jpg" />
                <div>
                    <H2>CAROLINE ALVARÃES / A.C.S</H2>
                    <P>CRM: 773650-AM</P>
                </div>
            </ContainerPerfil>
        </Container>
    )
}