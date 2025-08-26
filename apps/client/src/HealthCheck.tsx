import { useEffect, useState } from 'react'

export default function HealthCheck() {
  const [status, setStatus] = useState<'idle'|'ok'|'error'>('idle')

  useEffect(() => {
    fetch('/api/health')
      .then(r => r.ok ? r.json() : Promise.reject(r))
      .then(() => setStatus('ok'))
      .catch(() => setStatus('error'))
  }, [])

  return (
    <div style={{ padding: 16 }}>
      <h2>Gateway health</h2>
      {status === 'ok' && <span>✅ OK</span>}
      {status === 'error' && <span>❌ Error</span>}
      {status === 'idle' && <span>…checking</span>}
    </div>
  )
}
