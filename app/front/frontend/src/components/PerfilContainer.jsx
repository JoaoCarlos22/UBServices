import { Image } from "../styles/Image"
import {Container, Voltar, ContainerPerfil, H2, P} from '../styles/PerfilContainer'
import Button from './Button'
 
 export const PerfilContainer = ({route}) => {
     return (
         <Container>
             <Voltar>
                 <Button to={route} variant="secondary">VOLTAR</Button>
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