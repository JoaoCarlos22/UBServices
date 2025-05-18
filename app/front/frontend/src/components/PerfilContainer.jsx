import { Image } from "../styles/Image"
import {Container, Voltar, BtnVoltar, ContainerPerfil, H2, P} from '../styles/PerfilContainer'

export const PerfilContainer = () => {
    return (
        <Container>
            <Voltar>
                <BtnVoltar> ← VOLTAR</BtnVoltar>
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