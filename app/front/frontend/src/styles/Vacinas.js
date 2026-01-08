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
  background: ${props => props.active ? '#1976d2' : '#ffffff'};
  color: ${props => props.active ? '#ffffff' : '#333'};
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  font-size: 0.95rem;
  transition: all 0.3s ease;
  white-space: nowrap;

  &:hover {
    background: ${props => props.active ? '#1565c0' : '#eeeeee'};
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
    color: #0d47a1;
    font-size: 1.8rem;
    margin: 0 0 12px 0;
  }

  p {
    line-height: 1.6;
  }
`

export const CalendarGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 16px;
  margin-top: 20px;
`

export const CalendarDay = styled.div`
  padding: 16px;
  background: linear-gradient(135deg, #e3f0ff 0%, #f8fbff 100%);
  border-left: 4px solid #1976d2;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-2px);
  }

  h4 {
    color: #0d47a1;
    margin: 0 0 8px 0;
    font-size: 1.1rem;
  }

  p {
    margin: 0;
    color: #555;
    font-size: 0.95rem;
    line-height: 1.5;
  }
`

export const VaccineCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 20px;
  padding: 18px;
  margin: 16px 0;
  background: #f9f9f9;
  border: 1.5px solid #e0e0e0;
  border-radius: 10px;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
    background: #ffffff;
  }

  h3 {
    color: #0d47a1;
    margin: 0 0 6px 0;
    font-size: 1.2rem;
  }

  p {
    margin: 0;
    color: #666;
    font-size: 0.95rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const HistoricoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 20px;
`

export const VaccineRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 20px;
  padding: 16px;
  background: #f5f7fa;
  border-radius: 8px;
  border-left: 4px solid #4caf50;

  h4 {
    color: #0d47a1;
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

export const ActionButtons = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 16px;
  justify-content: flex-end;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const ScheduleForm = styled.form`
  margin-top: 28px;
  padding: 24px;
  background: linear-gradient(120deg, #e3f0ff 0%, #f8fbff 100%);
  border-radius: 12px;
  border: 2px solid #b5cef4;
  box-shadow: 0 2px 8px rgba(25, 118, 210, 0.1);

  h3 {
    color: #0d47a1;
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
    color: #174ea6;
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
    border: 2px solid #1976d2;
    outline: none;
    box-shadow: 0 0 0 3px rgba(25, 118, 210, 0.1);
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
    border: 2px solid #1976d2;
    outline: none;
    box-shadow: 0 0 0 3px rgba(25, 118, 210, 0.1);
  }

  &:disabled {
    background: #f5f5f5;
    cursor: not-allowed;
  }
`

export const ScheduleButton = styled.button`
  padding: 12px 24px;
  background: linear-gradient(135deg, #1976d2 0%, #1565c0 100%);
  color: #ffffff;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  font-size: 1rem;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(25, 118, 210, 0.3);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(25, 118, 210, 0.4);
  }

  &:active {
    transform: translateY(0);
  }

  @media print {
    display: none;
  }
`