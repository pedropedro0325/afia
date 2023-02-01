import { gql } from '@apollo/client'

const GET_VENUESTYPES = gql`
query Venues {
  venueTypes {
    id
    description
  }
}
`

export {
  GET_VENUESTYPES
}