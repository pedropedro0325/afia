import { gql, useQuery } from "@apollo/client"

const GET_EVENT_BY_PARTAKER = gql`
query EventByPartaker($partakerId: Int!) {
    eventByPartaker(partakerId: $partakerId) {
      id
    description
    status {
      description {
        en
        fr
      }
      id
      type {
        id
        description {
          en
          fr
        }
      }
    }
    startDate
    endDate
    venue {
      id
      venueType {
        id
        description
      }
      phoneNumber
      description
    }
    care {
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
        id
        name
        lastName
        birthDate
        birthCityId
        adressId
        phoneNumber
        email
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
        description
        creationDate
        createdBy
      }
      acts {
        id
        description {
          fr
          en
        }
        price {
          partakerIds
          value
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
}
`

export const useEventByPartaker = (partakerId: any) => {
  const { data, error, loading } = useQuery(GET_EVENT_BY_PARTAKER, {
    variables: {
      partakerId
    }
  })
  return {
    data, error, loading
  }
}