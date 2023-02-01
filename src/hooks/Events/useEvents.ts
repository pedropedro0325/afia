import { gql } from '@apollo/client'

const GET_EVENTS = gql`
query Query {
  events {
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

export {
  GET_EVENTS
}