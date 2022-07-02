import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'

import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
  uri: 'https://petgram-bjvalmaseda-server.vercel.app/graphql',
  cache: new InMemoryCache()
})

const rootElement = document.getElementById('root')
const root = createRoot(rootElement)
root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
)
