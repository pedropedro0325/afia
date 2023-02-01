import { gql } from '@apollo/client'

const GET_STATUS = gql`
query Query {
  manyStatus {
    id
    description {
      fr
      en
    }
  }
}
`

export { GET_STATUS }