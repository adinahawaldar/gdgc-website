import { useEffect, useState } from 'react'

// All team content lives in public/data/teams.json (no data hardcoded in components).
// It is fetched once and shared by every component that calls this hook.
let cache = null

export default function useTeams() {
  const [state, setState] = useState(cache ? { data: cache, error: null } : { data: null, error: null })

  useEffect(() => {
    if (cache) return
    let alive = true
    fetch(`${import.meta.env.BASE_URL}data/teams.json`)
      .then((r) => { if (!r.ok) throw new Error(`HTTP ${r.status}`); return r.json() })
      .then((d) => { cache = d; if (alive) setState({ data: d, error: null }) })
      .catch((e) => { if (alive) setState({ data: null, error: e.message }) })
    return () => { alive = false }
  }, [])

  return state
}
