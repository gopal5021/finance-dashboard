import { useState, useEffect } from 'react'
import Dashboard from './pages/Dashboard'

function App() {
  const [transactions, setTransactions] = useState(() => {
    const data = localStorage.getItem('tx')
    return data ? JSON.parse(data) : [
      { id: 1, date: '2026-04-01', amount: 5000, category: 'Salary', type: 'income' },
      { id: 2, date: '2026-04-02', amount: 1200, category: 'Food', type: 'expense' },
      { id: 3, date: '2026-04-03', amount: 800, category: 'Transport', type: 'expense' }
    ]
  })

  const [role, setRole] = useState('viewer')

  useEffect(() => {
    localStorage.setItem('tx', JSON.stringify(transactions))
  }, [transactions])

  useEffect(() => {
    const handleStorage = () => {
      const data = localStorage.getItem('tx')
      if (data) setTransactions(JSON.parse(data))
    }
    window.addEventListener('storage', handleStorage)
    return () => window.removeEventListener('storage', handleStorage)
  }, [])

  return (
    <Dashboard
      transactions={transactions}
      setTransactions={setTransactions}
      role={role}
      setRole={setRole}
    />
  )
}

export default App