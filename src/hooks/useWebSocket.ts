import useSWRSubscription from 'swr/subscription'

import type { SWRSubscriptionOptions } from 'swr/subscription'

interface WebSocketData {
  data: string | null,
  error: Error | null,
}

const DEFAULT_INTERVAL = 1000

export function useWebSocket (url: string, interval = DEFAULT_INTERVAL): WebSocketData {
  const { data, error } = useSWRSubscription(
    url,
    (key, { next }: SWRSubscriptionOptions<string, Error>) => {
      const socket = new WebSocket(key)

      socket.onopen = () => {
        socket.send(JSON.stringify({ type: 'start_monitoring', interval }))
      }

      socket.addEventListener('message', (event: MessageEvent<string>) => {
        next(null, event.data)
      })

      socket.addEventListener('error', () => next(new Error('WebSocket error')))

      return () => socket.close()
    }
  )

  return {
    data: data ?? null,
    error: error ?? null,
  }
}
