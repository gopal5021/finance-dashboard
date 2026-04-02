function Role({ role, setRole }) {
  return (
    <select value={role} onChange={e => setRole(e.target.value)}>
      <option value="viewer">Viewer Mode</option>
      <option value="admin">Admin Mode</option>
    </select>
  )
}

export default Role