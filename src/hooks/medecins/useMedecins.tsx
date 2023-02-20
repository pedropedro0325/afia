import { useQuery, gql } from '@apollo/client'

const GET_MEDECINS = gql`
query Partakers {
  partakers {
    id
    name
    lastName
    partakerTypes {
      id
      description
    }
    speciality {
      id
      description {
        fr
        en
      }
    }
    description
    creationDate
    createdBy
  }
}
`

export {
  GET_MEDECINS
}