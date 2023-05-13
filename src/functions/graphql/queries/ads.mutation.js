import { gql } from "@apollo/client"

export const Add_AD = gql`
    mutation Add_AD($customer: String, $description: String, $expected_clicks: Int, $expected_reach: Int, $expiry: timestamptz, $image: String, $name: String, $url: String, $price: Int) {
  insert_ads_one(object: {customer: $customer, description: $description, expected_clicks: $expected_clicks, expected_reach: $expected_reach, expiry: $expiry, image: $image, name: $name, url: $url, price: $price}) {
    id
  }
}
`