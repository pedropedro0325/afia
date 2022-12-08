import { useQuery, gql } from '@apollo/client'

const GET_MEDECINS = gql`
query {
    partakers {
    id
    name
    lastName
    birthDate
    birthCityId
    adressId
    phoneNumber
    email
    partakerType {
      id
      description
    }
    speciality {
      id
      description
    }
    description
  }
  }
`

export const useMedecins = () => {
    const { error, loading, data } = useQuery(GET_MEDECINS)

    return {
        error,
        data,
        loading
    }
}