import { useQuery, gql } from '@apollo/client'

const GET_MEDECINS = gql`
query Partakers {
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
      id
    }
    speciality {
      id
      description {
        fr
      }
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