import {
    Container,
    HeaderForm,
    Form,
    Label,
    InputText,
    TextArea,
    Submit
} from '../styles/Home'
import { use, useState, useRef } from "react"
import axios from 'axios'
import { PerfilContainer } from '../components/PerfilContainer'
import { Caminho } from '../styles/Caminho'

export const Home = () => {
    // armazenamento dos dados do front
    const [visitas, setVisitas] = useState([])
    const inputNome = useRef()
    const inputIdade = useRef()
    /*const [nome, setNome] = useState()
    const [idade, setIdade] = useState()*/

    // envia uma nova visita ao back end
    async function registrarVisita(e) {
        const {data: newVisita} = await axios.post('http://localhost:4000/cadVisita', { name: inputNome.current.value, age: inputIdade.current.value })

        // 
        setVisitas([...visitas, newVisita])
    }

    /*
    function capturarNome(e) {
        setNome(e.target.value)
    }

    function capturarIdade(e) {
        setIdade(e.target.value)
    }*/

    return (
        <>
        <PerfilContainer/>
        <Caminho>
            <p>VISITAS DOMICILIARES / REGISTRAR VISITA</p>
        </Caminho>
        <Container>
            <HeaderForm>
                <h2>INFORMAÇÕES CLÍNICAS</h2><br />
            </HeaderForm>

            <Form>
                <Label>Nome:</Label>
                <InputText ref={inputNome} />
                <Label>Idade:</Label>
                <InputText ref={inputIdade} />
                <Label>Gênero:</Label>
                <InputText/>
                <Label>Dados Vitais:</Label>
                <TextArea></TextArea>
                <Label>Sintomas:</Label>
                <TextArea></TextArea>
                <Label>Diagnóstico:</Label>
                <TextArea></TextArea>
                <Label>Tratamentos Administrados:</Label>
                <TextArea></TextArea>
                <Label>Recomendações:</Label>
                <TextArea></TextArea>
                <Label>Anotações:</Label>
                <TextArea></TextArea>
                <Label>Profissional Responsável:</Label>
                <InputText />
                <Submit to="/visitas" onClick={registrarVisita}>Salvar e Sincronizar</Submit>
            </Form>
        </Container>
        </>
    )
}