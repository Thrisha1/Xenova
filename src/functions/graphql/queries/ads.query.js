import { gql } from "@apollo/client"


export const GET_ADS = gql`
    query Get_ADS {
      ads {
        id
        expiry
        description
        s3_url {
          url
        }
        price
        name
  }
    }

`

export const GET_SHARED = gql`
query GET_SHARED {
  ad_shares {
    id
    clicks
    ad {
      description
      image
      name
      s3 {
        url
      }
    }
  }
}
`