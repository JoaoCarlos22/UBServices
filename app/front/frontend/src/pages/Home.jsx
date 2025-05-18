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

export const Home = () => {
    const [visitas, setVisitas] = useState([])
    const inputNome = useRef()
    const inputIdade = useRef()
    /*const [nome, setNome] = useState()
    const [idade, setIdade] = useState()*/

    async function registrarVisita(e) {
        const data = await axios.post('http://localhost:4000/cadVisita', { name: inputNome.current.value, age: inputIdade.current.value })



        /*setVisitas([...visitas, {
            name: inputNome.current.value,
            idade: inputIdade.current.value
        }])*/
    }
    /*
    function capturarNome(e) {
        setNome(e.target.value)
    }

    function capturarIdade(e) {
        setIdade(e.target.value)
    }*/

    return (
        <Container>
            <HeaderForm>
                <h2>REGISTRAR VISITA DOMICILIAR</h2><br />
                <h3>INFORMAÇÕES CLÍNICAS</h3>
            </HeaderForm>

            <Form>
                <Label>Nome:</Label>
                <InputText ref={inputNome} id="nome" name="nome" />
                <Label for="idade">Idade:</Label>
                <InputText ref={inputIdade} type="text" id="idade" name="idade" />
                <Label for="genero">Gênero:</Label>
                <InputText type="text" id="genero" name="genero" />
                <Label for="dados-vitais">Dados Vitais:</Label>
                <TextArea id="dados-vitais" name="dados-vitais"></TextArea>
                <Label for="sintomas">Sintomas:</Label>
                <TextArea id="sintomas" name="sintomas"></TextArea>
                <Label for="diagnostico">Diagnóstico:</Label>
                <TextArea id="diagnostico" name="diagnostico"></TextArea>
                <Label for="tratamentos">Tratamentos Administrados:</Label>
                <TextArea id="tratamentos" name="tratamentos"></TextArea>
                <Label for="recomendacoes">Recomendações:</Label>
                <TextArea id="recomendacoes" name="recomendacoes"></TextArea>
                <Label for="anotacoes">Anotações:</Label>
                <TextArea id="anotacoes" name="anotacoes"></TextArea>
                <Label>Profissional Responsável:</Label>
                <InputText id="profissional" name="profissional" />
                <Submit type="submit" onClick={registrarVisita}>Salvar e Sincronizar</Submit>
            </Form>
        </Container>
    )
}