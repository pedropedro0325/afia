import { gql } from '@apollo/client'

const GET_VENUES = gql`
query Venues {
  venues {
    id
    venueType {
      id
      description
    }
    phoneNumber
    description
  }
}
`

export {
  GET_VENUES
}