import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'

import { ApolloClient, ApolloLink, ApolloProvider, from, HttpLink, InMemoryCache } from '@apollo/client'
import { AppProvider } from './AppContext'
import { onError } from '@apollo/client/link/error'

const authMiddleware = new ApolloLink((operation, forward) => {
  const token = window.sessionStorage.getItem('token')
  if (token) {
    operation.setContext({
      headers: {
        authorization: `Bearer ${token}`
      }
    })
  }
  return forward(operation)
})

const errorMiddleware = onError(({ networkError }) => {
  if (networkError && networkError.result.code === 'invalid_token') {
    window.sessionStorage.removeItem('token')
    window.location = '/'
  }
})

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: from([
    errorMiddleware,
    authMiddleware,
    new HttpLink({
      uri: 'https://petgram-bjvalmaseda-server.vercel.app/graphql'
    })
  ])
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
