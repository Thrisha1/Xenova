import { gql } from "@apollo/client"

export const GET_USER = gql`
    query GET_USER {
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

export const GET_USER_BY_ID = gql`
    query GET_USER_BY_ID($id: String = "") {
    users(where: {id: {_eq: $id}}) {
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

