import { useQuery, gql } from '@apollo/client'

const GET_EVENTS = gql`
query Events {
  events {
    care {
      status {
        description {
          en
          fr
        }
        id
        type {
          description {
            fr
            en
          }
          id
        }
      }
      acts {
        careId
        description {
          fr
          en
        }
        id
        price {
          value
          partakerIds
        }
        specialities {
          id
          description {
            fr
            en
          }
        }
        instanceActAllPrices {
          actId
          amountDue
          amountPaid
          amountRejected
          careId
          dateAmount
          payWho
          seqNumber
          userId
        }
        lastInstanceActPrices {
          actId
          amountDue
          amountPaid
          amountRejected
          careId
          dateAmount
          payWho
          seqNumber
          userId
        }
      }
      description
      diseases {
        diseaseLanguage {
          id
          description
        }
        id
        description {
          fr
          en
        }
      }
      id
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
            fr
            en
          }
        }
        description
        creationDate
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
      specialities {
        id
        description {
          fr
          en
        }
      }
    }
    description
    endDate
    id
    startDate
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
    venue {
      id
      venueType {
        id
        description
      }
      phoneNumber
      description
    }
  }
}
`

export const useEvents = () => {
  const { error, loading, data } = useQuery(GET_EVENTS)
  console.log("=============", error)
  return {
    error,
    data,
    loading
  }
}