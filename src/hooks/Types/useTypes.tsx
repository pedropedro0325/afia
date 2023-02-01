import { gql } from '@apollo/client'

const GET_TYPES = gql`
query PartakerTypes {
  partakerTypes {
    id
    description
  }
}
`

export { GET_TYPES }