import { useQuery, gql } from '@apollo/client'

const GET_PATIENTS = gql`
query Patients {
  patients {
    id
    name
    lastName
    birthDate
    birthCityId
    adressId
    phoneNumber
    description
  }
}
`

export {
  GET_PATIENTS
}