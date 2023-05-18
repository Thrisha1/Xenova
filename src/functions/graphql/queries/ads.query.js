import { gql } from "@apollo/client"


export const GET_AD = gql`
    query Get_AD {
      ads {
        customer
        description
        expiry
        id
        image
        name
        price
      }
    }

`