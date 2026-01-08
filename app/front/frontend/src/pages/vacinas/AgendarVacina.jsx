import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { PageContainer, Titulo } from '../../components/ui/UiLibrary'
import Button from '../../components/Button'
import {
  ScheduleForm,
  FormGroup,
  Input,
  Select,
  ScheduleButton,
  ActionButtons
} from '../../styles/Vacinas'

export const AgendarVacina = () => {
  const navigate = useNavigate()
  const { vaccineId } = useParams()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const vacinesDisponiveis = [
    { id: 1, nome: 'COVID-19' },
    { id: 2, nome: 'Influenza' },
    { id: 3, nome: 'Tétano' },
    { id: 4, nome: 'Hepatite B' },
    { id: 5, nome: 'HPV' },
  ]

  const [form, setForm] = useState({
    vacina: vaccineId || '',
    data: '',
    horario: '',
    ubs: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setSuccess('')

    if (!form.vacina || !form.data || !form.horario || !form.ubs) {
      setError('Preencha todos os campos obrigatórios.')
      return
    }

    try {
      setLoading(true)
      // Integrar com API aqui
      // await axios.post('http://localhost:4000/agendarVacina', form)
      setSuccess('Agendamento realizado com sucesso!')
      setTimeout(() => navigate('/vacinas'), 3000)
    } catch (err) {
      setError('Erro ao agendar vacinação. Tente novamente.')
    } finally {
      setLoading(false)
    }
  }

  const nomeVacina = vacinesDisponiveis.find(v => v.id === parseInt(vaccineId))?.nome || 'Vacinação'

  return (
    <PageContainer>
      <div style={{ position: 'relative', width: '100%', marginBottom: 12 }}>
        <Button
          variant="ghost"
          onClick={() => navigate(-1)}
          aria-label="Voltar"
          style={{ position: 'absolute', left: 0 }}
        >
          ←
        </Button>
        <Titulo style={{ margin: 0, textAlign: 'center' }}>Agendar {nomeVacina}</Titulo>
      </div>

      <ScheduleForm onSubmit={handleSubmit} style={{ maxWidth: '600px', margin: '0 auto' }}>
        <h3>Informações do Agendamento</h3>

        <FormGroup>
          <label>Vacina *</label>
          <Select name="vacina" value={form.vacina} onChange={handleChange} disabled>
            <option value="">Selecione uma vacina</option>
            {vacinesDisponiveis.map((v) => (
              <option key={v.id} value={v.id}>
                {v.nome}
              </option>
            ))}
          </Select>
        </FormGroup>

        <FormGroup>
          <label>Data Preferida *</label>
          <Input 
            type="date" 
            name="data"
            value={form.data}
            onChange={handleChange}
            required 
          />
        </FormGroup>

        <FormGroup>
          <label>Horário *</label>
          <Select 
            name="horario"
            value={form.horario}
            onChange={handleChange}
            required
          >
            <option value="">Selecione um horário</option>
            <option value="08:00">08:00</option>
            <option value="09:00">09:00</option>
            <option value="10:00">10:00</option>
            <option value="14:00">14:00</option>
            <option value="15:00">15:00</option>
            <option value="16:00">16:00</option>
          </Select>
        </FormGroup>

        <FormGroup>
          <label>UBS Preferida *</label>
          <Select 
            name="ubs"
            value={form.ubs}
            onChange={handleChange}
            required
          >
            <option value="">Selecione uma UBS</option>
            <option value="ubs-centro">UBS Centro</option>
            <option value="ubs-norte">UBS Zona Norte</option>
            <option value="ubs-sul">UBS Zona Sul</option>
            <option value="ubs-leste">UBS Zona Leste</option>
          </Select>
        </FormGroup>

        {error && <small style={{ color: '#b00020', marginTop: 6 }}>{error}</small>}
        {success && <small style={{ color: '#2e7d32', marginTop: 6 }}>{success}</small>}

        <ActionButtons>
          <Button variant="ghost" onClick={() => navigate(-1)}>
            Cancelar
          </Button>
          <ScheduleButton type="submit" disabled={loading}>
            {loading ? 'Agendando...' : 'Confirmar Agendamento'}
          </ScheduleButton>
        </ActionButtons>
      </ScheduleForm>
    </PageContainer>
  )
}

export default AgendarVacina