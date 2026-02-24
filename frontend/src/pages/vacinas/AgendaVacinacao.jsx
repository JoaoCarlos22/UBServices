import { useState, useRef } from 'react'
import Button from '../../components/Button'
import {
  VaccineCard,
  ScheduleForm,
  FormGroup,
  Input,
  Select,
  ScheduleButton,
  ActionButtons
} from '../../styles/Vacinas'

export const AgendaVacinacao = ({ vacinesDisponiveis }) => {
  const [selectedVaccine, setSelectedVaccine] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const formRef = useRef(null)

  const [form, setForm] = useState({
    vacina: '',
    data: '',
    horario: '',
    ubs: ''
  })

  const handleAgendarVacina = (vaccineId) => {
    setSelectedVaccine(vaccineId)
    setForm(prev => ({ ...prev, vacina: vaccineId }))
    setError('')
    setSuccess('')
    
    // Scroll para o formulário após um pequeno delay para garantir que foi renderizado
    setTimeout(() => {
      formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 100)
  }

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
      
      // Simulação de chamada API
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      setSuccess('Agendamento realizado com sucesso!')
      
      // Limpar formulário após 2 segundos
      setTimeout(() => {
        setSelectedVaccine(null)
        setForm({ vacina: '', data: '', horario: '', ubs: '' })
        setSuccess('')
      }, 2000)
    } catch (err) {
      setError('Erro ao agendar vacinação. Tente novamente.')
    } finally {
      setLoading(false)
    }
  }

  const handleCancelar = () => {
    setSelectedVaccine(null)
    setForm({ vacina: '', data: '', horario: '', ubs: '' })
    setError('')
    setSuccess('')
  }

  const vacinaSelecionada = vacinesDisponiveis.find(v => v.id === selectedVaccine)

  return (
    <div>
      <h2>Próximas Vacinas a Tomar</h2>
      <p style={{ color: '#666', marginBottom: '20px' }}>
        Confira as vacinas que você ainda precisa tomar e agende seu atendimento.
      </p>

      {vacinesDisponiveis.map((vaccine) => (
        <VaccineCard key={vaccine.id}>
          <div>
            <h3>{vaccine.nome}</h3>
            <p>{vaccine.descricao}</p>
            <div style={{ marginTop: '10px', fontSize: '0.9rem', color: '#666' }}>
              {vaccine.dosesRestantes > 0 ? (
                <>
                  <p>📌 Doses restantes: {vaccine.dosesRestantes}</p>
                  <p>📅 Próxima dose: {vaccine.proximaDose}</p>
                </>
              ) : (
                <p style={{ color: '#2e7d32', fontWeight: 'bold' }}>✓ Vacinação atualizada</p>
              )}
            </div>
          </div>
          {vaccine.dosesRestantes > 0 && (
            <Button
              variant="primary"
              onClick={() => handleAgendarVacina(vaccine.id)}
              style={{ alignSelf: 'flex-end' }}
            >
              Agendar
            </Button>
          )}
        </VaccineCard>
      ))}

      {/* Formulário de agendamento */}
      {selectedVaccine && (
        <div ref={formRef} style={{ marginTop: '32px', scrollMarginTop: '20px' }}>
          <ScheduleForm onSubmit={handleSubmit}>
            <h3>Agendar Vacinação - {vacinaSelecionada?.nome}</h3>

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
                min={new Date().toISOString().split('T')[0]}
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
                <option value="11:00">11:00</option>
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

            {error && (
              <div style={{ 
                padding: '12px', 
                backgroundColor: '#ffebee', 
                border: '1px solid #ef5350',
                borderRadius: '8px',
                color: '#c62828',
                marginTop: '12px'
              }}>
                {error}
              </div>
            )}
            
            {success && (
              <div style={{ 
                padding: '12px', 
                backgroundColor: '#e8f5e9', 
                border: '1px solid #66bb6a',
                borderRadius: '8px',
                color: '#2e7d32',
                marginTop: '12px'
              }}>
                {success}
              </div>
            )}

            <ActionButtons>
              <Button variant="ghost" onClick={handleCancelar} disabled={loading}>
                Cancelar
              </Button>
              <ScheduleButton type="submit" disabled={loading}>
                {loading ? 'Agendando...' : 'Confirmar Agendamento'}
              </ScheduleButton>
            </ActionButtons>
          </ScheduleForm>
        </div>
      )}
    </div>
  )
}