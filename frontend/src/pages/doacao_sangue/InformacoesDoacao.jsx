import { InfoGrid, InfoCard, InfoList, AlertBox, IntervalInfo } from '../../styles/DoacaoSangue'

export const InformacoesDoacaoSangue = ({ informacoes }) => {
  return (
    <div>
      <h2>Por que Doar Sangue?</h2>
      <p style={{ color: '#666', marginBottom: '20px', lineHeight: '1.6' }}>
        A doação de sangue é um ato voluntário que pode salvar vidas. O sangue doado é fundamental 
        para tratamentos e procedimentos médicos, como cirurgias, tratamentos de câncer e emergências.
      </p>

      <AlertBox>
        <strong>🩸 Importante:</strong> Uma única doação pode salvar até 4 vidas! 
        O estoque de sangue é sempre necessário e sua contribuição faz toda a diferença.
      </AlertBox>

      <InfoGrid>
        <InfoCard variant="success">
          <h3>✅ Requisitos para Doar</h3>
          <InfoList>
            {informacoes.requisitos.map((req, idx) => (
              <li key={idx}>{req}</li>
            ))}
          </InfoList>
        </InfoCard>

        <InfoCard variant="warning">
          <h3>⚠️ Impedimentos Temporários</h3>
          <InfoList>
            {informacoes.impedimentos.map((imp, idx) => (
              <li key={idx}>{imp}</li>
            ))}
          </InfoList>
        </InfoCard>

        <InfoCard variant="info">
          <h3>💝 Benefícios da Doação</h3>
          <InfoList>
            {informacoes.beneficios.map((ben, idx) => (
              <li key={idx}>{ben}</li>
            ))}
          </InfoList>
        </InfoCard>

        <InfoCard variant="primary">
          <h3>⏱️ Intervalo entre Doações</h3>
          <IntervalInfo>
            <div>
              <strong>👨 Homens:</strong>
              <p>{informacoes.intervalo.homens}</p>
            </div>
            <div>
              <strong>👩 Mulheres:</strong>
              <p>{informacoes.intervalo.mulheres}</p>
            </div>
          </IntervalInfo>
        </InfoCard>
      </InfoGrid>

      <div style={{ marginTop: '32px', padding: '20px', background: '#fff3e0', borderRadius: '8px', borderLeft: '4px solid #ff9800' }}>
        <h4 style={{ margin: '0 0 12px 0', color: '#e65100' }}>📋 Documentos Necessários</h4>
        <p style={{ margin: 0, color: '#666' }}>
          Leve um documento de identidade com foto (RG, CNH, passaporte ou carteira de trabalho).
        </p>
      </div>
    </div>
  )
}