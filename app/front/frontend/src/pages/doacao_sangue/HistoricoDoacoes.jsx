import { HistoricoContainer, DoacaoRow, ProximaDoacaoBox } from '../../styles/DoacaoSangue'

export const HistoricoDoacoes = ({ historicoDoacoes }) => {
  // Calcula próxima doação permitida (90 dias após a última - exemplo para mulheres)
  const calcularProximaDoacao = () => {
    if (historicoDoacoes.length === 0) return 'Você ainda não doou sangue'
    
    const ultimaDoacao = new Date(historicoDoacoes[0].data.split('/').reverse().join('-'))
    const proximaDoacao = new Date(ultimaDoacao)
    proximaDoacao.setDate(proximaDoacao.getDate() + 90) // 90 dias para mulheres
    
    const hoje = new Date()
    if (proximaDoacao <= hoje) {
      return 'Você já pode doar novamente! 🎉'
    }
    
    return `Próxima doação permitida: ${proximaDoacao.toLocaleDateString('pt-BR')}`
  }

  return (
    <div>
      <h2>Meu Histórico de Doações</h2>
      <p style={{ color: '#666', marginBottom: '20px' }}>
        Acompanhe todas as suas doações de sangue e veja quando poderá doar novamente.
      </p>

      <ProximaDoacaoBox>
        <h3>📅 {calcularProximaDoacao()}</h3>
        <p style={{ margin: '8px 0 0 0', color: '#666', fontSize: '0.9rem' }}>
          Lembre-se: Mulheres podem doar a cada 90 dias (máx. 3x/ano) e homens a cada 60 dias (máx. 4x/ano)
        </p>
      </ProximaDoacaoBox>

      <HistoricoContainer>
        {historicoDoacoes.length === 0 ? (
          <div style={{ 
            padding: '32px', 
            textAlign: 'center', 
            background: '#f5f7fa', 
            borderRadius: '8px',
            color: '#666'
          }}>
            <p style={{ margin: 0, fontSize: '1.1rem' }}>📋 Você ainda não possui doações registradas.</p>
            <p style={{ margin: '8px 0 0 0' }}>Agende sua primeira doação e salve vidas!</p>
          </div>
        ) : (
          historicoDoacoes.map((doacao) => (
            <DoacaoRow key={doacao.id}>
              <div>
                <h4>🩸 Doação de {doacao.volume}</h4>
                <p><strong>Tipo Sanguíneo:</strong> {doacao.tipoSangue}</p>
                <p>📅 <strong>Data:</strong> {doacao.data}</p>
                <p>📍 <strong>Local:</strong> {doacao.local}</p>
                <p style={{ 
                  color: '#2e7d32', 
                  fontWeight: 'bold',
                  marginTop: '8px'
                }}>
                  ✓ {doacao.status}
                </p>
              </div>
              <div style={{ alignSelf: 'center', fontSize: '2rem' }}>❤️</div>
            </DoacaoRow>
          ))
        )}
      </HistoricoContainer>

      {historicoDoacoes.length > 0 && (
        <div style={{ 
          marginTop: '24px', 
          padding: '20px', 
          background: '#fff3e0', 
          borderRadius: '8px',
          borderLeft: '4px solid #ff9800'
        }}>
          <h4 style={{ margin: '0 0 8px 0', color: '#e65100' }}>🏆 Parabéns, Doador!</h4>
          <p style={{ margin: 0, color: '#666' }}>
            Você já realizou <strong>{historicoDoacoes.length} doação(ões)</strong> e pode ter salvado até{' '}
            <strong>{historicoDoacoes.length * 4} vidas</strong>! Continue fazendo a diferença! 💝
          </p>
        </div>
      )}
    </div>
  )
}