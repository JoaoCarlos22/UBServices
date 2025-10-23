import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import LogoImg from "../assets/ubservices-logo.png"

import {
  PageContainer,
  Label,
  Input,
  PrimaryButton,
  Titulo,
  LinkBtn,
} from "../components/ui/UiLibrary"
import Button from "../components/Button"
import {
    LoginCard,
    Logo,
    Form,
    Actions
} from "../styles/Login"

export const Login = () => {
  const navigate = useNavigate()
  const [form, setForm] = useState({ email: "", password: "" })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  // Função para atualizar os campos do formulário
  function handleChange(e) {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value })) // Atualiza o campo específico
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setError("")
    if (!form.email || !form.password) {
      setError("Preencha e‑mail e senha.")
      return
    }
    try {
      setLoading(true)
      const {data } = await axios.post("http://localhost:4000/login", {
        email: form.email,
        password: form.password,
      })
      // verifica se o usuario é da area medica ou nao
      if (data.userType === "medico") {
        navigate("/area-medica")
      } else {
        navigate("/home")
      }
    } catch (err) {
      setError("E-mail ou senha incorretos.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <PageContainer>
      <LoginCard>
        <Logo src={LogoImg} alt="UBServices" />
        <Titulo>Entrar no UBServices</Titulo>

        <Form onSubmit={handleSubmit} noValidate>
          <div>
            <Label>E-mail</Label>
            <Input
              name="email"
              type="email"
              placeholder="seu@exemplo.com"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <Label>Senha</Label>
            <Input
              name="password"
              type="password"
              placeholder="••••••••"
              value={form.password}
              onChange={handleChange}
              required
            />
          </div>

          <div style={{ width: "100%", textAlign: "right", marginTop: 6 }}>
            <LinkBtn to="/esqueci-senha" style={{ fontSize: "0.9rem", color: "#1976d2" }}>
              Esqueceu sua senha?
            </LinkBtn>
          </div>

          {error && (
            <small style={{ color: "#b00020", marginTop: 6 }}>{error}</small>
          )}

          <Actions>
            <PrimaryButton type="submit" disabled={loading}>
              {loading ? "Entrando..." : "Entrar"}
            </PrimaryButton>

            <Button to="/selecionar-area" variant="ghost" style={{ padding: "10px 12px" }}>
              Cadastrar
            </Button>
          </Actions>
        </Form>
      </LoginCard>
    </PageContainer>
  )
}