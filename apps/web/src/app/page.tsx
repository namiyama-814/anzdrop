'use client'

import { useEffect, useState } from 'react'
import { client } from '@/lib/api'

export default function Home() {
  const [message, setMessage] = useState('')

  useEffect(() => {
    const fetchHello = async () => {
      const res = await client.api.hello.$get()
      const data = await res.json()
      setMessage(data.message)
    }
    fetchHello()
  }, [])

  return (
    <div>
      <h1>APIレスポンス:</h1>
      <p>{message || 'Loading...'}</p>
    </div>
  )
}