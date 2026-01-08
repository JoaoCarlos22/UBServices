import { CalendarGrid, CalendarDay } from '../../styles/Vacinas'

export const CalendarioVacinacao = ({ calendarioRecomendado }) => {
  return (
    <div>
      <h2>Calendário Nacional de Vacinação</h2>
      <p style={{ color: '#666', marginBottom: '20px' }}>
        Confira as vacinas recomendadas por faixa etária segundo o Ministério da Saúde.
      </p>

      <CalendarGrid>
        {calendarioRecomendado.map((item, idx) => (
          <CalendarDay key={idx}>
            <h4>{item.faixa}</h4>
            <p>{item.vacinas}</p>
          </CalendarDay>
        ))}
      </CalendarGrid>
    </div>
  )
}