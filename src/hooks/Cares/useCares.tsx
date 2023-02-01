import { useQuery, gql } from '@apollo/client'

const GET_CARES = gql`
query Cares {
  cares {
    id
    description
    specialities {
      id
    }
    patient {
      name
    }
    partakers {
      lastName
      partakerTypes {
        description
      }
    }
    acts {
      description {
        fr
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
    }
    status {
      description {
        fr
      }
    }
  }
}
`

export {
  GET_CARES
}