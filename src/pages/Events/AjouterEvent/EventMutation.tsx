import { gql } from "@apollo/client";

const CREATE_EVENT = gql`
 mutation CreateEvent($description: String!, $statusId: Int, $careDescription: String, $startDate: dateScalar, $endDate: dateScalar, $patientId: Int, $partakerIds: [Int], $venueId: Int, $actIds: [Int]) {
  createEvent(description: $description, statusId: $statusId, careDescription: $careDescription, startDate: $startDate, endDate: $endDate, patientId: $patientId, partakerIds: $partakerIds, venueId: $venueId, actIds: $actIds) {
    id
    description
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

export { CREATE_EVENT }