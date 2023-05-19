import { gql } from "@apollo/client"

export const GetUser = gql`
    query GetUser {
    users {
        DOB
        PIN
        email
        contacts
        id
        gender
        name
        phone
  }
}
`

