import { gql } from '@apollo/client'

const GET_SPECIALITIES = gql`
query Query {
  specialities {
    id
    description {
      fr
      en
    }
  }
}
`

export { GET_SPECIALITIES }