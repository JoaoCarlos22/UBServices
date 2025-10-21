import {
    PageContainer,
    HeaderForm,
    Label,
    Input,
    TextArea,
    FormGrid,
    FullRow,
    PrimaryButton,
    PathBadge
} from '../../components/ui/UiLibrary'
import { useState } from "react"
import axios from 'axios'
import { PerfilContainer } from '../../components/PerfilContainer'
import { Caminho } from '../../styles/Caminho'
// BtnGreen ainda disponível como opção; PrimaryButton é a nova alternativa
// import { BtnGreen } from '../../styles/globalStyle'

export const CadVisitas = () => {
    // armazenamento dos dados do front
    const [visitas, setVisitas] = useState([])
    const [form, setForm] = useState({
        name: '',
        age: '',
        gender: '',
        professional: '',
        vitals: '',
        symptoms: '',
        diagnosis: '',
        treatments: '',
        recommendations: '',
        notes: ''
    })

    function handleChange(e) {
        const { name, value } = e.target
        setForm(prev => ({ ...prev, [name]: value }))
    }

    // envia uma nova visita ao back end
    async function registrarVisita(e) {
        e.preventDefault()

        // validação simples
        if (!form.name || !form.age) return

        const {data: newVisita} = await axios.post('http://localhost:4000/cadVisita', { name: form.name, age: form.age })

        setVisitas(prev => [...prev, newVisita])

        // limpa campos principais
        setForm(prev => ({ ...prev, name: '', age: '' }))
    }

    return (
        <>
    <PerfilContainer route="/visita-domiciliar" />
        <Caminho>
            <p>VISITAS DOMICILIARES / REGISTRAR VISITA</p>
        </Caminho>
        <PageContainer>
            <HeaderForm>
                <h2>INFORMAÇÕES CLÍNICAS</h2>
            </HeaderForm>
            <form onSubmit={registrarVisita} noValidate style={{width: '100%'}}>
                <FormGrid>
                    <div>
                        <Label>Nome: <small style={{fontWeight:500, color:'#666'}}> (obrigatório)</small></Label>
                        <Input name="name" placeholder="Nome completo do paciente" value={form.name} onChange={handleChange} required />
                    </div>
                    <div>
                        <Label>Idade: <small style={{fontWeight:500, color:'#666'}}> (obrigatório)</small></Label>
                        <Input name="age" placeholder="Ex: 45" value={form.age} onChange={handleChange} required type="number" min="0" />
                    </div>
                    <div>
                        <Label>Gênero:</Label>
                        <Input name="gender" value={form.gender} onChange={handleChange} />
                    </div>
                    <div>
                        <Label>Profissional Responsável:</Label>
                        <Input name="professional" value={form.professional} onChange={handleChange} />
                    </div>
                    <FullRow>
                        <Label>Dados Vitais:</Label>
                        <TextArea name="vitals" value={form.vitals} onChange={handleChange} />
                    </FullRow>

                    <FullRow>
                        <Label>Sintomas:</Label>
                        <TextArea name="symptoms" value={form.symptoms} onChange={handleChange} />
                    </FullRow>

                    <FullRow>
                        <Label>Diagnóstico:</Label>
                        <TextArea name="diagnosis" value={form.diagnosis} onChange={handleChange} />
                    </FullRow>

                    <FullRow>
                        <Label>Tratamentos Administrados:</Label>
                        <TextArea name="treatments" value={form.treatments} onChange={handleChange} />
                    </FullRow>

                    <FullRow>
                        <Label>Recomendações:</Label>
                        <TextArea name="recommendations" value={form.recommendations} onChange={handleChange} />
                    </FullRow>

                    <FullRow>
                        <Label>Anotações:</Label>
                        <TextArea name="notes" value={form.notes} onChange={handleChange} />
                    </FullRow>

                    <FullRow style={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <PrimaryButton type="submit" disabled={!form.name || !form.age} aria-disabled={!form.name || !form.age}>
                            Salvar e Sincronizar
                        </PrimaryButton>
                    </FullRow>
                </FormGrid>
            </form>
        </PageContainer>
        </>
    )
}