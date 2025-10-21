import { Image } from "../styles/Image"
import {Container, Voltar, ContainerPerfil, H2, P} from '../styles/PerfilContainer'
import Button from './Button'
import { useNavigate } from "react-router-dom";
 
 export const PerfilContainer = () => {
    const navigate = useNavigate();
     return (
         <Container>
             <Voltar>
                 <Button onClick={() => navigate(-1)} variant="secondary">VOLTAR</Button>
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