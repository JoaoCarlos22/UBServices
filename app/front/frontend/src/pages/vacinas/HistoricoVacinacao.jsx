import { HistoricoContainer, VaccineRow } from '../../styles/Vacinas'

export const HistoricoVacinacao = ({ historicoVacinas }) => {
  return (
    <div>
      <h2>Histórico de Vacinação</h2>
      <p style={{ color: '#666', marginBottom: '20px' }}>
        Veja todas as vacinas que você já recebeu.
      </p>

      <HistoricoContainer>
        {historicoVacinas.map((vacina) => (
          <VaccineRow key={vacina.id}>
            <div>
              <h4>{vacina.vacina}</h4>
              <p>Dose: {vacina.dose}</p>
              <p>📅 Data: {vacina.dataAplicacao}</p>
              <p>📍 Local: {vacina.local}</p>
              <p>👨‍⚕️ Profissional: {vacina.profissional}</p>
            </div>
            <div style={{ alignSelf: 'center', color: '#2e7d32', fontSize: '1.5rem' }}>✓</div>
          </VaccineRow>
        ))}
      </HistoricoContainer>
    </div>
  )
}