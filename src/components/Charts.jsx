import { Line, Pie } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  ArcElement,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
  Filler
} from 'chart.js'

ChartJS.register(ArcElement, LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend, Filler)

function Charts({ transactions }) {
  const sorted = [...transactions].sort((a, b) => new Date(a.date) - new Date(b.date))
  const labels = sorted.map(t => t.date)
  const amounts = sorted.map(t => t.amount)

  const categories = {}
  transactions.forEach(t => {
    if (t.type === 'expense') {
      categories[t.category] = (categories[t.category] || 0) + t.amount
    }
  })

  const pieLabels = Object.keys(categories)
  const pieData = Object.values(categories)

  return (
    <div className="charts">
      <Line
        data={{
          labels,
          datasets: [
            {
              data: amounts,
              borderColor: '#38bdf8',
              backgroundColor: 'rgba(56,189,248,0.2)',
              fill: true,
              tension: 0.4,
              pointRadius: 4,
              pointBackgroundColor: '#38bdf8'
            }
          ]
        }}
        options={{
          responsive: true,
          plugins: { legend: { display: false } },
          scales: {
            x: { ticks: { color: '#94a3b8' }, grid: { display: false } },
            y: { ticks: { color: '#94a3b8' }, grid: { color: '#1e293b' } }
          }
        }}
      />

      <div className="chart-box">
        {pieData.length > 0 ? (
          <Pie
            data={{
              labels: pieLabels,
              datasets: [
                {
                  data: pieData,
                  backgroundColor: ['#38bdf8', '#22c55e', '#f87171'],
                  borderWidth: 1
                }
              ]
            }}
            options={{
              responsive: true,
              maintainAspectRatio: false,
              plugins: {
                legend: {
                  position: 'bottom',
                  labels: { color: '#e2e8f0', boxWidth: 12 }
                }
              }
            }}
          />
        ) : (
          <div style={{ textAlign: 'center', padding: '40px' }}>
            No expense data
          </div>
        )}
      </div>
    </div>
  )
}

export default Charts