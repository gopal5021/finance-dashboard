function Insights({ transactions }) {
  const expenses = transactions.filter(t => t.type === 'expense')

  const map = {}
  expenses.forEach(t => {
    map[t.category] = (map[t.category] || 0) + t.amount
  })

  const top = Object.keys(map).length
    ? Object.keys(map).reduce((a, b) => map[a] > map[b] ? a : b)
    : 'None'

  const total = expenses.reduce((a, b) => a + b.amount, 0)

  const now = new Date()
  const currentMonth = now.getMonth()
  const currentYear = now.getFullYear()

  const current = transactions.filter(t => {
    const d = new Date(t.date)
    return d.getMonth() === currentMonth && d.getFullYear() === currentYear
  })

  const previous = transactions.filter(t => {
    const d = new Date(t.date)
    return d.getMonth() === currentMonth - 1 && d.getFullYear() === currentYear
  })

  const currentTotal = current.reduce((a, b) => a + b.amount, 0)
  const previousTotal = previous.reduce((a, b) => a + b.amount, 0)

  return (
    <div>
      <h2>Insights</h2>
      <p>Top spending: {top}</p>
      <p>Total expenses: ₹{total}</p>
      <p>This month: ₹{currentTotal}</p>
      <p>Last month: ₹{previousTotal}</p>
    </div>
  )
}

export default Insights