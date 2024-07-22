# H1-Como médico, eu quero realizar consultas remotas para ter atendimento eficiente sob as demandas.

## Critérios de aceitação:
__C1. O sistema deve enviar a notificação em até 24 horas antes da consulta.__

__C2. Confirmar que a notificação contém o nome do paciente, horário da consulta e motivo da visita.__

__C3. O sistema deve oferecer um sistema de chat particular entre o paciente.__

__C4. O sistema deve permitir que o médico possa reagendar as consultas remotas.__

__C5. A interface de visualização deve conter apenas informações importantes e objetivas para melhor entendimento, permitindo ao médico
filtrar consultas por horário, tipo de consulta e status (confirmada, pendente, cancelada e finalizada).__

__C6. Garantir que o sistema mantém um histórico de todas as remarcações para fins de auditoria e planejamento.__

## Regras de Negócios:
__R1.Todas as consultas agendadas devem ser confirmadas automaticamente por um sistema eletrônico de notificação, que enviará lembretes tanto para o médico quanto para o paciente. Isso garantirá uma comunicação eficaz e reduzirá a taxa de não comparecimento, conforme a Resolução CFM nº 1.821/2007, que regulamenta a comunicação entre médicos e pacientes.__

__R2. A notificação deve ser enviada com uma antecedência mínima de 24 horas antes da consulta, conforme as melhores práticas de preparação médica.__

__R3. A notificação deve ser enviada via e-mail para o médico.__

# Tela 1

![](https://github.com/JoaoCarlos22/TP-UBServices/blob/main/docs/rastreabilidade_requisitos/images/tela_h01.png)



__- Descrição: Esta tela proporciona ao médico uma visão geral eficiente das consultas remotas agendadas, permitindo gerenciar e interagir com cada paciente de maneira conveniente e eficaz.__

__- Oferece acesso rápido a diferentes seções do sistema, como "Consultas", "Chat" e "Notificações". Permitindo ao médico mover-se facilmente entre as diferentes funcionalidades do sistema.__



# H6. Como atendente da UBS, eu desejo poder realizar atendimentos dos pacientes remotamente, para que os mesmos possam ser informados do dia e horário de sua consulta.

Critérios de aceitação:
As consultas e agendamentos, assim como as as respostas às dúvidas dos pacientes só estarão disponíveis para os pacientes cadastrados e que integram a UBS.
Os atendimentos ou consultas poderão ser realizadas por perfis de atendente ou médico, podendo ser simultâneo.
As consultas, assim como as as respostas às dúvidas dos pacientes só ocorreram nos horários e dias de funcionamentos das UBS.

Regras de negócio:
Seguindo o regimento da Lei nº 8.080, de 19 de setembro 1990, o atendimento oferecido pela UBS deve ser disponibilizado para todos os pacientes em que fazem parte dela.
O sistema deve disponibilizar a solicitação de agendamento informando ao paciente os dias e horários disponíveis para que o mesmo possa definir o melhor horário em que pode realizar a consulta.
Em casos de consultas remotas o sistema deve permitir com que o atendente possa notificar para o paciente a data e horário definidos para a realização da consulta.
O sistema deve permitir o usuário enviar mensagens no chat para o perfil da UBS informando sua dúvida em relação aos serviços prestados.

H9 - Como uma Enfermeira da Comunidade, eu quero acessar rapidamente informações clínicas e protocolos relevantes para tomar decisões informadas durante o atendimento aos pacientes.

Critérios de Aceitação:

Deve permitir o acesso à diagnósticos, exames dos pacientes para fazer o diagnóstico.
A plataforma deve permitir buscas rápidas por termos clínicos, diagnósticos, tratamentos e protocolos.
As informações clínicas e protocolos devem ser categorizados por áreas de especialização, tipos de doenças, sintomas e tratamentos.
A plataforma deve suportar alguns tipos de arquivos incluindo textos, imagens.
A enfermeira deve poder marcar informações e protocolos como favoritos para acesso rápido em consultas futuras.

Regras de Negócios:
R1 - A enfermeira deve ter acesso a um sistema de prontuário eletrônico integrado que permita a visualização rápida e fácil das informações clínicas dos pacientes durante o atendimento.
R2 - Protocolos clínicos e diretrizes devem ser categorizados por especialidade e tipo de atendimento para facilitar a busca e consulta.
R3 - A enfermeira deve ter acesso a uma base de dados centralizada contendo protocolos clínicos e diretrizes atualizadas para diferentes condições de saúde.
R4 - O acesso a informações clínicas e protocolos deve ser protegido por medidas de segurança robustas para garantir a confidencialidade e integridade dos dados.
R5 - Todas as decisões clínicas baseadas em protocolos e informações acessadas devem ser registradas no prontuário eletrônico do paciente para referência futura e auditoria.

H10 - Como uma Enfermeira da Comunidade, eu quero registrar de forma eficiente as informações coletadas durante visitas domiciliares para manter um histórico completo e garantir a continuidade do cuidado.
Critérios de Aceitação:

C1. A plataforma deve permitir o registro de informações clínicas detalhadas, incluindo sintomas, diagnósticos, tratamentos administrados, e recomendações.
C2. A plataforma deve exibir o histórico completo de visitas e registros anteriores de cada paciente, permitindo uma visão holística do cuidado ao paciente.
C3. A plataforma deve ser otimizada para uso em campo, com capacidade de funcionar offline e sincronizar os dados automaticamente quando a conexão for restabelecida.
C4. A plataforma deve realizar backups automáticos regulares para evitar perda de dados.
C5. Deve haver um processo claro e eficiente para a recuperação de dados em caso de falha ou perda de dispositivo.
C6. As informações registradas durante as visitas domiciliares devem ser automaticamente atualizadas no prontuário eletrônico do paciente.

Regras de Negócio:
R1 - A enfermeira deve coletar informações detalhadas durante cada visita domiciliar, incluindo dados vitais, sintomas relatados, medicamentos em uso, e observações gerais.
R2 - Dispositivos móveis devem estar configurados para funcionar offline, permitindo a entrada de dados mesmo em locais sem conexão à internet, com sincronização automática assim que a conexão for restabelecida.
R3 - As informações coletadas devem seguir um formato estruturado e padronizado, garantindo a consistência e a facilidade de acesso e análise dos dados.
R4 - O acesso ao sistema de prontuário eletrônico deve ser controlado por autenticação segura, e o dispositivo móvel deve ter medidas de proteção, como senhas e criptografia.
