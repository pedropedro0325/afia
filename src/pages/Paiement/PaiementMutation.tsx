import { gql } from "@apollo/client";

const CREATE_INSTANCE = gql`
mutation CreateUpdateInstanceActPrice($careId: Int, $actId: Int, $amountPaid: Float, $amountDue: Float, $amountRejected: Float, $userId: Int, $dateAmount: dateScalar, $payWho: Int) {
  createUpdateInstanceActPrice(careId: $careId, actId: $actId, amountPaid: $amountPaid, amountDue: $amountDue, amountRejected: $amountRejected, userId: $userId, dateAmount: $dateAmount, payWho: $payWho) {
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
`

export { CREATE_INSTANCE }