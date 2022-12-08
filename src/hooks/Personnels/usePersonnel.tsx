import { gql, useQuery } from "@apollo/client"

const GET_PARTAKER = gql`
  query Partaker($partakerId: Int!) {
  partaker(partakerId: $partakerId) {
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

export const usePersonnel = (partakerId: any) => {
  const { data, error, loading } = useQuery(GET_PARTAKER, {
    variables: {
      partakerId
    }
  })
  return {
    data, error, loading
  }
}