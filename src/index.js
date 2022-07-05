import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'

import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import { AppProvider } from './AppContext'

const client = new ApolloClient({
  uri: 'https://petgram-bjvalmaseda-server.vercel.app/graphql',
  cache: new InMemoryCache()
})
const rootElement = document.getElementById('root')
const root = createRoot(rootElement)
root.render(
  <AppProvider>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </AppProvider>
)
