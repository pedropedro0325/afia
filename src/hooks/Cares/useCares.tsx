import { useQuery, gql } from '@apollo/client'

const GET_CARES = gql`
query Cares {
  cares {
    id
    description
    specialities {
      id
      description {
        fr
        en
      }
    }
    diseases {
      id
      description {
        fr
        en
      }
      diseaseLanguage {
        id
        description
      }
    }
    patient {
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
    partakers {
      email
      adressId
      birthCityId
      birthDate
      createdBy
      creationDate
      description
      id
      lastName
      name
      phoneNumber
      partakerTypes {
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
    }
    acts {
      description {
        fr
      }
      instanceActAllPrices {
        actId
        amountPaid
        amountDue
        amountRejected
        payWho
        careId
        dateAmount
        seqNumber
        userId
      }
      lastInstanceActPrices {
        actId
        amountPaid
        amountDue
        amountRejected
        payWho
        careId
        dateAmount
        seqNumber
        userId
      }
      careId
      price {
        value
      }
      specialities {
        id
      }
      id
    }
    status {
      id
      description {
        fr
        en
      }
      type {
        id
        description {
          fr
          en
        }
      }
    }
  }
}
`

export const useCares = () => {
  const { error, loading, data } = useQuery(GET_CARES)
  console.log("=============", error)
  return {
    error,
    data,
    loading
  }
}