import { useState } from 'react'
import Button from '../../components/Button'
import {
  ScheduleForm,
  FormGroup,
  Input,
  Select,
  ScheduleButton,
  ActionButtons
} from '../../styles/DoacaoSangue'

export const AgendarDoacao = ({ locaisDoacao }) => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const [form, setForm] = useState({
    nome: '',
    cpf: '',
    tipoSangue: '',
    local: '',
    data: '',
    horario: '',
    telefone: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setSuccess('')

    if (!form.nome || !form.cpf || !form.tipoSangue || !form.local || !form.data || !form.horario || !form.telefone) {
      setError('Preencha todos os campos obrigatórios.')
      return
    }

    try {
      setLoading(true)
      // Integrar com API aqui
      // await axios.post('http://localhost:4000/agendarDoacao', form)
      
      // Simulação de chamada API
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      setSuccess('Doação agendada com sucesso! Você receberá uma confirmação por SMS.')
      
      // Limpar formulário após 2 segundos
      setTimeout(() => {
        setForm({
          nome: '',
          cpf: '',
          tipoSangue: '',
          local: '',
          data: '',
          horario: '',
          telefone: ''
        })
        setSuccess('')
      }, 3000)
    } catch (err) {
      setError('Erro ao agendar doação. Tente novamente.')
    } finally {
      setLoading(false)
    }
  }

  const handleCancelar = () => {
    setForm({
      nome: '',
      cpf: '',
      tipoSangue: '',
      local: '',
      data: '',
      horario: '',
      telefone: ''
    })
    setError('')
    setSuccess('')
  }

  return (
    <div>
      <h2>Agendar Doação de Sangue</h2>
      <p style={{ color: '#666', marginBottom: '20px' }}>
        Preencha o formulário abaixo para agendar sua doação. Você receberá uma confirmação por SMS.
      </p>

      <ScheduleForm onSubmit={handleSubmit}>
        <FormGroup>
          <label>Nome Completo *</label>
          <Input 
            type="text" 
            name="nome"
            value={form.nome}
            onChange={handleChange}
            placeholder="Digite seu nome completo"
            required 
          />
        </FormGroup>

        <FormGroup>
          <label>CPF *</label>
          <Input 
            type="text" 
            name="cpf"
            value={form.cpf}
            onChange={handleChange}
            placeholder="000.000.000-00"
            maxLength="14"
            required 
          />
        </FormGroup>

        <FormGroup>
          <label>Tipo Sanguíneo *</label>
          <Select 
            name="tipoSangue"
            value={form.tipoSangue}
            onChange={handleChange}
            required
          >
            <option value="">Selecione seu tipo sanguíneo</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
          </Select>
        </FormGroup>

        <FormGroup>
          <label>Telefone *</label>
          <Input 
            type="tel" 
            name="telefone"
            value={form.telefone}
            onChange={handleChange}
            placeholder="(11) 98888-8888"
            required 
          />
        </FormGroup>

        <FormGroup>
          <label>Local de Doação *</label>
          <Select 
            name="local"
            value={form.local}
            onChange={handleChange}
            required
          >
            <option value="">Selecione um local</option>
            {locaisDoacao.map((local) => (
              <option key={local.id} value={local.id}>
                {local.nome} - {local.endereco.split(' - ')[1]}
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
            <option value="07:00">07:00</option>
            <option value="08:00">08:00</option>
            <option value="09:00">09:00</option>
            <option value="10:00">10:00</option>
            <option value="11:00">11:00</option>
            <option value="14:00">14:00</option>
            <option value="15:00">15:00</option>
            <option value="16:00">16:00</option>
            <option value="17:00">17:00</option>
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
  )
}