import { gql } from '@apollo/client'

const GET_EVENTS = gql`
query Query {
  events {
    id
    description
    startDate
    endDate
    care {
      id
      description
      patient{
        id
        name
      }
      partakers{
        name
      }
      acts {
        id
        description {
          fr
          en
        }
        careId
      }
    }
  }
}
`

export {
  GET_EVENTS
}