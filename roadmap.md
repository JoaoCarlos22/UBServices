# Roadmap de Funcionalidades — UBServices

Base: [user-stories.md](user-stories.md) e [rastreabilidade_requisitos/mapeamento_requisitos_funcionalidades.md](rastreabilidade_requisitos/mapeamento_requisitos_funcionalidades.md)

## 1) Premissas

- Entrega incremental, com foco em funcionalidade utilizável ao fim de cada versão.
- Escopo inicial de perfis: `ADMIN`, `PACIENTE`, `ATENDENTE`, `MEDICO`.
- Perfis adicionais (`ENFERMEIRA`, `ACS`, `TECNICO_ENFERMAGEM`, `SUPERVISOR`) entram de forma progressiva nas próximas versões.
- Funcionalidades complexas (chat, notificações multicanal, tempo real, geolocalização avançada) ficam para versões futuras.
- Cada versão deve fechar com API funcional, testes do fluxo principal e documentação atualizada.

---

## 2) Visão por Versão (SemVer)

## Versão 0.1.0 — Fundação de Acesso e Conta (Semanas 1–2)

### User Stories foco

- H12 (cadastro de paciente)
- H13 (logout)
- H14 (edição de perfil)

### Funcionalidades detalhadas

- Autenticação base
  - Cadastro com validação de nome, e-mail e senha.
  - Login com e-mail/senha e retorno do perfil.
  - Logout com invalidação de sessão/token.
- Perfis e autorização
  - Implementar enum e controle inicial apenas com `ADMIN`, `PACIENTE`, `ATENDENTE`, `MEDICO`.
  - Middleware RBAC simples por rota.
- Conta do paciente
  - Consulta de próprio perfil.
  - Edição de dados básicos (nome, e-mail, senha).
- Qualidade técnica
  - Padronização de erros HTTP (400/401/403/404/500).
  - Separação de validações em arquivos próprios.

### Checklist da versão

- [ ] Criar endpoints de cadastro, login, logout e perfil.
- [ ] Restringir enum inicial para `ADMIN`, `PACIENTE`, `ATENDENTE`, `MEDICO`.
- [ ] Aplicar middleware de autenticação e autorização por perfil.
- [ ] Validar payloads com schemas dedicados.
- [ ] Cobrir com testes os fluxos de cadastro/login/logout.
- [ ] Atualizar documentação da API.

---

## Versão 0.2.0 — Catálogo de UBS e Serviços (Semanas 3–4)

### User Stories foco

- H7 (cadastrar UBS)
- H8 (cadastrar serviços da UBS)
- H11 (visualizar informações e serviços da UBS)

### Funcionalidades detalhadas

- Domínio UBS
  - CRUD de UBS (restrito a `ADMIN` no momento inicial).
  - Campos mínimos: nome, endereço, bairro, horário, contato.
- Domínio Serviços
  - CRUD de serviços vinculados à UBS.
  - Classificação por tipo (ex.: vacinação, consulta clínica, curativo).
- Consulta do paciente
  - Listagem de UBS e serviços.
  - Busca por nome da UBS, bairro e tipo de serviço.
- Governança inicial
  - Regras de integridade: não permitir serviço órfão sem UBS.
  - Registro de atualização (data e usuário responsável).

### Checklist da versão

- [ ] Implementar CRUD de UBS com validação.
- [ ] Implementar CRUD de serviços por UBS.
- [ ] Criar endpoint de listagem/busca para paciente.
- [ ] Garantir permissões de escrita apenas para `ADMIN`.
- [ ] Cobrir cenários de erro (UBS inexistente, dados inválidos).
- [ ] Publicar exemplos de uso dos endpoints.

---

## Versão 0.3.0 — Agendamento Essencial (Semanas 5–7)

### User Stories foco

- H2 (agendamento remoto via atendente)
- H1 (consulta remota do médico, escopo inicial)

### Funcionalidades detalhadas

- Agenda
  - Criar, editar e cancelar consulta.
  - Estados: `PENDENTE`, `CONFIRMADA`, `CANCELADA`, `FINALIZADA`.
  - Regras de conflito de horário por médico e faixa de atendimento.
- Operação por perfil
  - `ATENDENTE` agenda e remarca.
  - `MEDICO` consulta agenda do dia/semana e finaliza atendimento.
  - `PACIENTE` visualiza seus agendamentos.
- Rastreabilidade
  - Histórico de alterações de status e remarcações.
  - Motivo obrigatório para cancelamento/remarcação.

### Checklist da versão

- [ ] Criar modelo e endpoints de agendamento.
- [ ] Bloquear dupla marcação no mesmo horário do médico.
- [ ] Implementar filtros por período, status e profissional.
- [ ] Registrar histórico de alterações de consulta.
- [ ] Testar cenários de criação, remarcação e cancelamento.
- [ ] Documentar regras de negócio da agenda.

---

## Versão 0.4.0 — Módulo Clínico Operacional (Semanas 8–10)

### User Stories foco

- H3 (acesso a protocolos)
- H4 (registro de visitas)
- H5 (ficha para visita domiciliar)
- H6 (administração de medicação)

### Funcionalidades detalhadas

- Expansão de perfis
  - Adicionar `ENFERMEIRA`, `ACS`, `TECNICO_ENFERMAGEM`, `SUPERVISOR` ao RBAC.
  - Ajustar permissões por endpoint para os novos perfis.
- Fichas e visitas
  - Abertura de ficha domiciliar por `ACS`.
  - Encaminhamento e acompanhamento do atendimento.
  - Histórico completo de evolução por paciente.
- Protocolos e medicação
  - Consulta de protocolos clínicos por tema.
  - Registro de administração de medicação com vínculo à prescrição.

### Checklist da versão

- [ ] Incluir novos perfis no enum e no middleware de autorização.
- [ ] Criar fluxo de ficha domiciliar (abertura, acompanhamento, conclusão).
- [ ] Implementar histórico clínico mínimo por paciente.
- [ ] Implementar registro de administração de medicação.
- [ ] Cobrir regras de permissão por perfil clínico.
- [ ] Atualizar documentação funcional do módulo clínico.

---

## Versão 0.5.0 — Funcionalidades Diretas do Paciente (Semanas 11–13)

### User Stories foco

- H9 (caderneta de vacina digital)
- H10 (lembretes de doação — configuração inicial)
- H15 (seleção de UBS mais próxima — versão simples)

### Funcionalidades detalhadas

- Caderneta digital
  - Consulta de histórico de vacinas por data/tipo.
  - Exportação em PDF para compartilhamento.
- Lembretes de doação (modo básico)
  - Cadastro da preferência de periodicidade.
  - Geração de lembretes internos no sistema (sem push/SMS/e-mail nesta fase).
- Descoberta de UBS
  - Busca por cidade/bairro e ordenação simples por proximidade estimada.
  - Sem mapa em tempo real nesta versão.

### Checklist da versão

- [ ] Implementar endpoints de histórico vacinal e filtros.
- [ ] Implementar geração de PDF da caderneta.
- [ ] Implementar configuração de lembretes de doação no sistema.
- [ ] Implementar busca de UBS por região e proximidade estimada.
- [ ] Testar exportação e consultas de dados do paciente.
- [ ] Atualizar guia de uso no manual do usuário.

---

## Versão 0.6.0 — Estabilização, Segurança e Prontidão de Piloto (Semanas 14–15)

### User Stories foco

- Fechamento transversal de H1–H15 em nível MVP

### Funcionalidades detalhadas

- Segurança e conformidade
  - Revisão de permissões por rota e perfil.
  - Logs de auditoria para autenticação e alterações críticas.
  - Reforço de validações e mensagens padronizadas.
- Qualidade
  - Testes de integração dos fluxos principais.
  - Correção de inconsistências de dados e performance básica.
- Usabilidade
  - Aplicar melhorias priorizadas da inspeção de usabilidade.

### Checklist da versão

- [ ] Revisar e fechar matriz de permissões de todos os módulos.
- [ ] Implantar logs de auditoria para ações críticas.
- [ ] Executar suíte de integração dos fluxos essenciais.
- [ ] Corrigir bugs de maior impacto levantados no ciclo anterior.
- [ ] Atualizar documentação final do MVP para piloto.
- [ ] Validar critérios de aceite com o time.

---

## 3) Versões Futuras (1.x.y+)

Funcionalidades avançadas deliberadamente adiadas:

- **1.1.0** Notificações multicanal (e-mail, SMS, push) com preferências por usuário.
- **1.2.0** Chat assíncrono entre paciente e equipe da UBS com histórico.
- **1.3.0** Chat em tempo real e presença online.
- **1.4.0** Teleconsulta por vídeo.
- **1.5.0** Geolocalização e rota em tempo real.
- **1.6.0** Sincronização offline robusta e reconciliação de dados.

---

## 4) Mapeamento das User Stories por Versão

- H12, H13, H14 → 0.1.0
- H7, H8, H11 → 0.2.0
- H1, H2 → 0.3.0
- H3, H4, H5, H6 → 0.4.0
- H9, H10, H15 → 0.5.0
- Consolidação H1–H15 (MVP) → 0.6.0

---

## 5) Ordem de Execução Recomendada

1. **0.1.0** Fundação de acesso e conta
2. **0.2.0** Catálogo de UBS e serviços
3. **0.3.0** Agendamento essencial
4. **0.4.0** Módulo clínico operacional
5. **0.5.0** Funcionalidades diretas do paciente
6. **0.6.0** Estabilização e prontidão de piloto
