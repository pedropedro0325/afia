import { useQuery, gql } from '@apollo/client'

const GET_ACTS = gql`
query Acts {
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
      description {
        fr
        en
      }
      id
    }
    instanceActAllPrices {
      amountDue
      actId
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
}
`

export {
  GET_ACTS
}