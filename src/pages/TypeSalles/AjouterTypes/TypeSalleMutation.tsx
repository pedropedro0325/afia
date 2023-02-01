import { gql } from "@apollo/client";

const CREATE_TYPE_VENUE = gql`
    mutation CreateEvent($description: String) {
  createVenueType(description: $description) {
    description
  }
}
`

export { CREATE_TYPE_VENUE }