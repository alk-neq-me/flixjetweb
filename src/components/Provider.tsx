"use client"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryStreamedHydration } from '@tanstack/react-query-next-experimental'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { PropsWithChildren, useState } from "react"

function Provider({children}: PropsWithChildren) {
  const [client] = useState(new QueryClient({
    defaultOptions: { queries: { staleTime: 5000 } }
  }))

  return <QueryClientProvider client={client}>
    <ReactQueryStreamedHydration>
      {children}
    </ReactQueryStreamedHydration>
    {/* <ReactQueryDevtools initialIsOpen={false} /> */}
  </QueryClientProvider>
}

export default Provider
