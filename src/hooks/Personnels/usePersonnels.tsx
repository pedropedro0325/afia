import { useQuery, gql } from '@apollo/client'

const GET_PERSONNELS = gql`
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
        typeId
        speciality {
            id
            description
        }
        description
    }
  }
`

export const usePersonnels = () => {
    const { error, loading, data } = useQuery(GET_PERSONNELS)

    return {
        error,
        data,
        loading
    }
}