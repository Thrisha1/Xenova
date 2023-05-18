import { gql } from "@apollo/client"

export const GET_REFERRALS = gql`
query GET_REFERRALS {
  referals {
    id
    reffered_user {
      name
    }
  }
}
`
