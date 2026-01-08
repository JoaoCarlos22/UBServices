import Button from '../../components/Button'
import { ActionButtons } from '../../styles/Vacinas'

export const CadernetaDigital = ({ historicoVacinas }) => {
  const downloadCaderneta = () => {
    alert('Baixando caderneta em PDF...')
    // Implementar download real do PDF
  }

  const printCaderneta = () => {
    window.print()
  }

  return (
    <div>
      <h2>Caderneta Digital</h2>
      <p style={{ color: '#666', marginBottom: '20px' }}>
        Sua caderneta de vacinação em formato digital. Você pode baixar em PDF ou imprimir.
      </p>

      <ActionButtons style={{ marginBottom: '20px' }}>
        <Button variant="primary" onClick={downloadCaderneta}>
          📥 Baixar em PDF
        </Button>
        <Button variant="secondary" onClick={printCaderneta}>
          🖨️ Imprimir
        </Button>
      </ActionButtons>

      <div style={{
        border: '2px solid #b5cef4',
        borderRadius: '12px',
        padding: '20px',
        backgroundColor: '#f8fbff'
      }}>
        <h3 style={{ color: '#0d47a1', marginTop: 0 }}>Caderneta - {new Date().toLocaleDateString('pt-BR')}</h3>
        <hr />
        
        <div style={{ marginBottom: '20px' }}>
          <p><strong>Paciente:</strong> João da Silva</p>
          <p><strong>Data de Nascimento:</strong> 15/03/1990</p>
          <p><strong>CPF:</strong> ***.****.***-90</p>
        </div>

        <h4>Vacinas Administradas:</h4>
        <table style={{
          width: '100%',
          borderCollapse: 'collapse',
          marginTop: '10px'
        }}>
          <thead>
            <tr style={{ backgroundColor: '#b5cef4' }}>
              <th style={{ padding: '10px', textAlign: 'left', borderBottom: '1px solid #ccc' }}>Vacina</th>
              <th style={{ padding: '10px', textAlign: 'left', borderBottom: '1px solid #ccc' }}>Dose</th>
              <th style={{ padding: '10px', textAlign: 'left', borderBottom: '1px solid #ccc' }}>Data</th>
              <th style={{ padding: '10px', textAlign: 'left', borderBottom: '1px solid #ccc' }}>Local</th>
            </tr>
          </thead>
          <tbody>
            {historicoVacinas.map((vacina) => (
              <tr key={vacina.id} style={{ borderBottom: '1px solid #eee' }}>
                <td style={{ padding: '10px' }}>{vacina.vacina}</td>
                <td style={{ padding: '10px' }}>{vacina.dose}</td>
                <td style={{ padding: '10px' }}>{vacina.dataAplicacao}</td>
                <td style={{ padding: '10px' }}>{vacina.local}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}