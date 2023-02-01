import { gql } from "@apollo/client";

const CREATE_VENUE = gql`
    mutation CreateEvent($venueTypeId: Int, $phoneNumber: String, $description: String) {
  createVenue(venueTypeId: $venueTypeId, phoneNumber: $phoneNumber, description: $description) {
    venueType
        {
            id
            description
        }
        phoneNumber
        description
  }
}
`

export { CREATE_VENUE }