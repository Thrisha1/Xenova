import {
  ApolloClient,
  InMemoryCache,
  ApolloLink,
  HttpLink,
  from,
  fromPromise
} from "@apollo/client"
import { onError } from "@apollo/client/link/error"
import Token from "../auth/token"
import { RetryLink } from "@apollo/client/link/retry"
import auth from "../auth"
import { offsetLimitPagination } from "@apollo/client/utilities"

const token = new Token("id")

const retryLink = new RetryLink({
  delay: {
    initial: 300,
    max: Infinity,
    jitter: true
  },
  attempts: {
    max: 5,
    retryIf: (error, _operation) => {
      console.log(error)
      return false
    }
  }
})

const httpLink = new HttpLink({
  uri: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT
})

const authLink = new ApolloLink((operation, forward) => {
  operation.setContext(({ headers = {} }) => ({
    headers: {
      ...headers,
      ...(!token.get()
        ? { "X-Hasura-Role": "anonymous" }
        : { Authorization: `Bearer ${token.get()}` || null })
    }
  }))

  return forward(operation)
})

const errorLink = onError(
  ({ networkError, graphQLErrors, response, forward, operation }) => {
    if (networkError && networkError.statusCode === 401) {
    }
    if (graphQLErrors) {
      graphQLErrors.map(err => {
        const {
          message,
          extensions: { code },
          path
        } = err
        console.log(err)
        if (code === "invalid-jwt")
          return fromPromise(
            new Promise((res, rej) => {
              auth.refreshSession(err => {
                if (!err) res(true)
                else res(false)
              })
            })
          )
            .filter(x => {
              console.log(x)
              return !!x
            })
            .flatMap(() => {
              const oldHeaders = operation.getContext().headers
              console.log(token.get())
              // modify the operation context with a new token
              operation.setContext({
                headers: {
                  ...oldHeaders,
                  Authorization: `Bearer ${token.get()}`
                }
              })
              return forward(operation)
            })
      })
    }
    // if (response) response.errors = undefined;
  }
)

const graphQLClient = () =>
  new ApolloClient({
    cache: new InMemoryCache({
      typePolicies: {
        Query: {
          fields: {
            // show_nearby_properties: offsetLimitPagination(),
            // search_property: offsetLimitPagination(),
            // property: offsetLimitPagination()
          }
        }
      }
    }),
    link: from([authLink, errorLink, httpLink])
  })

export default graphQLClient
