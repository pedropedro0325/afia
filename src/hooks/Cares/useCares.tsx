import { useQuery, gql } from '@apollo/client'

const GET_CARES = gql`
query Cares {
  cares {
    id
    description
    patient{
      name
    }
    partakers {
      lastName
      name
    }
    acts {
      description {
        fr
      }
      lastInstanceActPrices {
        actId
        amountPaid
        careId
        dateAmount
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