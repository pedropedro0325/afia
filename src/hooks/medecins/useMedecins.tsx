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
      description
    }
    speciality {
      description
    }
    description
  }
  }
`

export const useMedecins = () => {
    const { error, loading, data } = useQuery(GET_MEDECINS)
console.log(error, data)
    return {
        error,
        data,
        loading
    }
}