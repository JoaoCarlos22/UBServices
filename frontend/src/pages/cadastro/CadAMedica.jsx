import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import {
  PageContainer,
  Label,
  Input,
  PrimaryButton,
  Titulo,
} from "../../components/ui/UiLibrary"
import Button from "../../components/Button"
import { CadastroCard, Form, Actions, RoleSelect } from "../../styles/Cadastro"

export const CadastroMedico = () => {
  const navigate = useNavigate()
  const [form, setForm] = useState({ name: "", email: "", phone: "", password: "", confirmPassword: "", role: "doctor" })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")

  function handleChange(e) {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setError("")
    setSuccess("")

    if (!form.name || !form.email || !form.phone || !form.password) {
      setError("Preencha todos os campos obrigatórios.")
      return
    }
    if (form.password.length < 6) {
      setError("A senha deve ter no mínimo 6 caracteres.")
      return
    }
    if (form.password !== form.confirmPassword) {
      setError("As senhas não coincidem.")
      return
    }

    // converte role em booleans
    const roles = {
      gerente: false,
      doctor: false,
      attendant: false,
      nurse: false,
    }
    roles[form.role] = true

    try {
      setLoading(true)
      await axios.post("http://localhost:4000/cadUser", {
        name: form.name,
        email: form.email,
        phone: form.phone,
        password: form.password,
        ...roles,
      })
      setSuccess("Cadastro realizado com sucesso. Redirecionando para login...")
      setTimeout(() => navigate("/login"), 1200)
    } catch (err) {
      setError(err?.response?.data?.error || "Erro ao cadastrar. Verifique os dados.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <PageContainer>
      <CadastroCard>
        <div style={{ position: 'relative', width: '100%', marginBottom: 12 }}>
          <Titulo style={{ margin: 0, textAlign: 'center' }}>Cadastro - Profissional</Titulo>
        </div>
        <Form onSubmit={handleSubmit} noValidate>
          <div>
            <Label>Nome</Label>
            <Input name="name" value={form.name} onChange={handleChange} required />
          </div>

          <div>
            <Label>E-mail</Label>
            <Input name="email" type="email" value={form.email} onChange={handleChange} required />
          </div>

          <div>
            <Label>Telefone</Label>
            <Input name="phone" value={form.phone} onChange={handleChange} required />
          </div>

          <div>
            <Label>Senha</Label>
            <Input name="password" type="password" value={form.password} onChange={handleChange} required />
          </div>

          <div>
            <Label>Confirmar senha</Label>
            <Input name="confirmPassword" type="password" value={form.confirmPassword} onChange={handleChange} required />
          </div>

          <RoleSelect>
            <Label>Tipo de perfil</Label>
            <select name="role" value={form.role} onChange={handleChange} style={{ padding: 8, borderRadius: 6 }}>
              <option value="gerente">Gerente</option>
              <option value="doctor">Médico</option>
              <option value="attendant">Atendente</option>
              <option value="nurse">Enfermeira</option>
            </select>
          </RoleSelect>

          {error && <small style={{ color: "#b00020", marginTop: 6 }}>{error}</small>}
          {success && <small style={{ color: "#2e7d32", marginTop: 6 }}>{success}</small>}

          <Actions>
            <div>
              <Button variant="ghost" onClick={() => navigate(-1)} aria-label="Voltar">Voltar</Button>
            </div>
            <div>
              <PrimaryButton type="submit" disabled={loading}>
                {loading ? "Cadastrando..." : "Cadastrar"}
              </PrimaryButton>
            </div>
          </Actions>
        </Form>
      </CadastroCard>
    </PageContainer>
  )
}