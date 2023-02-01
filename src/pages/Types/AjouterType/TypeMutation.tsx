import { gql } from '@apollo/client'

const CREATE_TYPE = gql`
    mutation CreatePartakerType($description: String) {
  createPartakerType(description: $description) {
    id
    description
  }
}
`

export { CREATE_TYPE }