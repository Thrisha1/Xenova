import { gql } from "@apollo/client"


export const SET_REFERRER = gql`
mutation SET_REFERRER($referrer: String = "") {
  insert_referals_one(object: {referrer: $referrer}) {
    id
  }
}
`