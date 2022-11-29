import { useQuery, gql } from '@apollo/client'

const GET_PATIENTS = gql`
query {
    patients {
      id
      name
    lastName
    email
    description
    adressId
    birthCityId
    birthDate
    phoneNumber
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