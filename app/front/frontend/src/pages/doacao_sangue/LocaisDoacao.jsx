import { LocalCard, LocalInfo, TiposSanguineos, TipoSangue } from '../../styles/DoacaoSangue'

export const LocaisDoacaoSangue = ({ locaisDoacao }) => {
  return (
    <div>
      <h2>Locais de Doação Disponíveis</h2>
      <p style={{ color: '#666', marginBottom: '20px' }}>
        Confira os locais onde você pode doar sangue. Verifique os horários de funcionamento e entre em contato antes de ir.
      </p>

      {locaisDoacao.map((local) => (
        <LocalCard key={local.id}>
          <div>
            <h3>🏥 {local.nome}</h3>
            <LocalInfo>
              <p><strong>📍 Endereço:</strong> {local.endereco}</p>
              <p><strong>📞 Telefone:</strong> {local.telefone}</p>
              <p><strong>🕒 Horário:</strong> {local.horario}</p>
            </LocalInfo>
            <div style={{ marginTop: '12px' }}>
              <strong>🩸 Tipos sanguíneos necessários:</strong>
              <TiposSanguineos>
                {local.tiposSanguineos.map((tipo, idx) => (
                  <TipoSangue key={idx}>{tipo}</TipoSangue>
                ))}
              </TiposSanguineos>
            </div>
          </div>
        </LocalCard>
      ))}

      <div style={{ marginTop: '24px', padding: '16px', background: '#e3f2fd', borderRadius: '8px' }}>
        <p style={{ margin: 0, color: '#0d47a1', fontWeight: '600' }}>
          💡 Dica: Ligue antes de ir para confirmar disponibilidade e evitar filas!
        </p>
      </div>
    </div>
  )
}