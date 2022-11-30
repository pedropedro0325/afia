import { gql, useQuery } from "@apollo/client"

const GET_PATIENT = gql`
  query Patient($patientId: Int!) {
  patient(patientId: $patientId) {
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

export const usePatient = (patientId: any) => {
  const { data, error, loading } = useQuery(GET_PATIENT, {
    variables: {
      patientId
    }
  })
  return {
    data, error, loading
  }
}