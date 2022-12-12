import { gql, useQuery } from "@apollo/client"

const GET_PARTAKER = gql`
  query Query($partakerId: Int!) {
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
      description {
        fr
        en
      }
    }
    description
    creationDate
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