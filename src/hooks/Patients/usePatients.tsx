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
    email
    description
  }
}
`

export const usePatients = () => {
  const { error, loading, data } = useQuery(GET_PATIENTS)

  return {
    error,
    data,
    loading
  }
}