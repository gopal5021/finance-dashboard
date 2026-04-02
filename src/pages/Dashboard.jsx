import { useState } from 'react'
import Cards from '../components/Cards'
import Charts from '../components/Charts'
import Transactions from '../components/Transactions'
import Role from '../components/Roles'
import Insights from '../components/Insights'

function Dashboard({ transactions, setTransactions, role, setRole }) {
  const [filter, setFilter] = useState('all')
  const [search, setSearch] = useState('')
  const [sort, setSort] = useState('latest')

  return (
    <div className="container">
      <h1>Finance Dashboard</h1>

      <div className="topbar">
        <h2>Overview</h2>
        <Role role={role} setRole={setRole} />
      </div>

      <Cards transactions={transactions} />
      <Charts transactions={transactions} />
      <Insights transactions={transactions} />

      <Transactions
        transactions={transactions}
        setTransactions={setTransactions}
        role={role}
        filter={filter}
        setFilter={setFilter}
        search={search}
        setSearch={setSearch}
        sort={sort}
        setSort={setSort}
      />
    </div>
  )
}

export default Dashboard