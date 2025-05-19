import { PerfilContainer } from "../components/PerfilContainer"
import { ContainerTabela, WrapTable, Tabela, Thead, Head, Linha, Body } from "../styles/Tabela"
import { Caminho } from "../styles/Caminho"
import axios from "axios"
import { useState, useEffect } from "react"

export const Visitas = () => {
    const [visitas, setVisitas] = useState([])

    // acessa as visitas registradas na API 
    useEffect(() => {
        async function fetchVisitas() {
            const { data: visitasBack } = await axios.get('http://localhost:4000/visitas')
            setVisitas(visitasBack)
        }
        fetchVisitas()
    }, [])


    // deleta a visita da API e atualiza a lista no front
    async function deletarVisita(visitaId) {
        await axios.delete(`http://localhost:4000/visitas/${visitaId}`)

        const newVisitas = visitas.filter((visita) => visita.id != visitaId)

        setVisitas(newVisitas)
    }

    return (
        <>
            <PerfilContainer route={'/cadVisita'} />
            <Caminho>
                <p>VISITAS DOMICILIARES / VISITAS AGENDADAS</p>
            </Caminho>

            <ContainerTabela>
                <WrapTable>
                    <Tabela>
                        <Thead>
                            <tr>
                                <Head>Data de Solicitação</Head>
                                <Head>Lista de Pacientes</Head>
                                <Head>Status</Head>
                            </tr>
                        </Thead>
                        <tbody>
                            <Linha>
                                <Body>20/07/2024</Body>
                                <Body>Antônio José Viana</Body>
                                <Body>Pendente</Body>
                            </Linha>
                            {visitas.map((visita) => (
                            <Linha key={visita.id}>
                                <>
                                <Body>
                                    18/05/2025
                                </Body>
                                <Body>
                                    {visita.name}
                                </Body>
                                <Body>
                                    Pendente
                                </Body>
                                </>
                            </Linha>
                            ))}
                        </tbody>
                    </Tabela>
                </WrapTable>
            </ContainerTabela>
        </>
    )
}