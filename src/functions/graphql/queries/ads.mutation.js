import { gql } from "@apollo/client"

export const ADD_AD = gql`
    mutation Add_AD($customer: String, $description: String, $expected_clicks: Int, $expected_reach: Int, $expiry: timestamptz, $image: String, $name: String, $url: String, $price: float8) {
  insert_ads_one(object: {customer: $customer, description: $description, expected_clicks: $expected_clicks, expected_reach: $expected_reach, expiry: $expiry, image: $image, name: $name, url: $url, price: $price}) {
    id
  }
}
`

export const ADD_SHARE = gql`
mutation ADD_SHARE($ad_id: uuid = "", $key: String) {
  insert_ad_shares_one(object: {ad_id: $ad_id, key: $key}) {
    id
  }
}
`

export const ADD_SHARE_PROOF = gql`
mutation ADD_SHARE_PROOF($picture: String, $id: uuid) {
  insert_ad_proof(objects: {id: $id, picture: $picture}) {
    affected_rows
  }
}
`