import { useQuery, gql } from '@apollo/client'

const GET_MEDECINS = gql`
query Query {
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
      description {
        en
        fr
      }
    }
    description
    creationDate
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