import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.08);
  overflow: hidden;
`

export const TabsContainer = styled.div`
  display: flex;
  gap: 8px;
  background: #f5f7fa;
  padding: 12px;
  flex-wrap: wrap;
  border-bottom: 2px solid #e0e0e0;

  @media (max-width: 768px) {
    gap: 4px;
  }
`

export const TabButton = styled.button`
  padding: 10px 16px;
  background: ${props => props.active ? '#d32f2f' : '#ffffff'};
  color: ${props => props.active ? '#ffffff' : '#333'};
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  font-size: 0.95rem;
  transition: all 0.3s ease;
  white-space: nowrap;

  &:hover {
    background: ${props => props.active ? '#c62828' : '#eeeeee'};
  }

  @media (max-width: 768px) {
    padding: 8px 12px;
    font-size: 0.85rem;
  }
`

export const TabContent = styled.div`
  padding: 28px;
  min-height: 500px;

  @media (max-width: 768px) {
    padding: 18px;
  }
`

export const ContentSection = styled.div`
  h2 {
    color: #c62828;
    font-size: 1.8rem;
    margin: 0 0 12px 0;
  }

  p {
    line-height: 1.6;
  }
`

export const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  margin-top: 24px;
`

const variantColors = {
  success: { bg: '#e8f5e9', border: '#4caf50', title: '#2e7d32' },
  warning: { bg: '#fff3e0', border: '#ff9800', title: '#e65100' },
  info: { bg: '#e3f2fd', border: '#2196f3', title: '#1565c0' },
  primary: { bg: '#fce4ec', border: '#e91e63', title: '#c2185b' }
}

export const InfoCard = styled.div`
  padding: 20px;
  background: ${props => variantColors[props.variant]?.bg || '#f5f7fa'};
  border-left: 4px solid ${props => variantColors[props.variant]?.border || '#666'};
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);

  h3 {
    color: ${props => variantColors[props.variant]?.title || '#333'};
    margin: 0 0 12px 0;
    font-size: 1.1rem;
  }
`

export const InfoList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    padding: 8px 0;
    color: #555;
    font-size: 0.95rem;
    line-height: 1.5;
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);

    &:last-child {
      border-bottom: none;
    }

    &:before {
      content: '• ';
      color: #d32f2f;
      font-weight: bold;
      margin-right: 8px;
    }
  }
`

export const AlertBox = styled.div`
  padding: 16px 20px;
  background: #ffebee;
  border: 2px solid #ef5350;
  border-radius: 10px;
  margin: 20px 0;
  color: #c62828;
  font-size: 1rem;
  line-height: 1.5;

  strong {
    font-weight: 700;
  }
`

export const IntervalInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  div {
    strong {
      display: block;
      margin-bottom: 4px;
      color: #c2185b;
    }

    p {
      margin: 0;
      color: #666;
      font-size: 0.95rem;
    }
  }
`

export const LocalCard = styled.div`
  padding: 20px;
  margin: 16px 0;
  background: #fafafa;
  border: 1.5px solid #e0e0e0;
  border-radius: 10px;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
    background: #ffffff;
  }

  h3 {
    color: #c62828;
    margin: 0 0 12px 0;
    font-size: 1.3rem;
  }
`

export const LocalInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 12px;

  p {
    margin: 0;
    color: #666;
    font-size: 0.95rem;

    strong {
      color: #333;
    }
  }
`

export const TiposSanguineos = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 8px;
`

export const TipoSangue = styled.span`
  display: inline-block;
  padding: 6px 12px;
  background: #d32f2f;
  color: #ffffff;
  border-radius: 6px;
  font-weight: 600;
  font-size: 0.9rem;
`

export const HistoricoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 20px;
`

export const DoacaoRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 20px;
  padding: 16px;
  background: #f5f7fa;
  border-radius: 8px;
  border-left: 4px solid #d32f2f;

  h4 {
    color: #c62828;
    margin: 0 0 8px 0;
    font-size: 1.1rem;
  }

  p {
    margin: 6px 0;
    color: #555;
    font-size: 0.9rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const ProximaDoacaoBox = styled.div`
  padding: 20px;
  background: linear-gradient(135deg, #ffebee 0%, #fce4ec 100%);
  border: 2px solid #f48fb1;
  border-radius: 12px;
  margin-bottom: 24px;
  text-align: center;

  h3 {
    color: #c62828;
    margin: 0;
    font-size: 1.4rem;
  }
`

export const ScheduleForm = styled.form`
  margin-top: 20px;
  padding: 24px;
  background: linear-gradient(120deg, #ffebee 0%, #fce4ec 100%);
  border-radius: 12px;
  border: 2px solid #f48fb1;
  box-shadow: 0 2px 8px rgba(211, 47, 47, 0.1);

  h3 {
    color: #c62828;
    margin-top: 0;
    margin-bottom: 16px;
    font-size: 1.4rem;
  }
`

export const FormGroup = styled.div`
  margin-bottom: 16px;

  label {
    display: block;
    font-weight: 600;
    color: #c62828;
    margin-bottom: 6px;
    font-size: 0.95rem;
  }
`

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1.5px solid #b0bec5;
  border-radius: 8px;
  font-size: 0.95rem;
  background: #ffffff;
  transition: border 0.2s, box-shadow 0.2s;

  &:focus {
    border: 2px solid #d32f2f;
    outline: none;
    box-shadow: 0 0 0 3px rgba(211, 47, 47, 0.1);
  }
`

export const Select = styled.select`
  width: 100%;
  padding: 10px;
  border: 1.5px solid #b0bec5;
  border-radius: 8px;
  font-size: 0.95rem;
  background: #ffffff;
  cursor: pointer;
  transition: border 0.2s, box-shadow 0.2s;

  &:focus {
    border: 2px solid #d32f2f;
    outline: none;
    box-shadow: 0 0 0 3px rgba(211, 47, 47, 0.1);
  }

  &:disabled {
    background: #f5f5f5;
    cursor: not-allowed;
  }
`

export const ActionButtons = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 16px;
  justify-content: flex-end;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const ScheduleButton = styled.button`
  padding: 12px 24px;
  background: linear-gradient(135deg, #d32f2f 0%, #c62828 100%);
  color: #ffffff;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  font-size: 1rem;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(211, 47, 47, 0.3);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(211, 47, 47, 0.4);
  }

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`