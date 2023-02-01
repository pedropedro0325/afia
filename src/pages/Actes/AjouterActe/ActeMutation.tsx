import { gql } from "@apollo/client";

const CREATE_ACTE = gql`
    mutation reateAct($specialityIds: [Int]!, $partakerIds: [Int]!, $descriptionFr: String, $descriptionEn: String, $value: Float) {
  createAct(specialityIds: $specialityIds, partakerIds: $partakerIds, descriptionFR: $descriptionFr, descriptionEN: $descriptionEn, value: $value) {
    careId
    description {
      fr
      en
    }
    id
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
  }
}
`

export { CREATE_ACTE }