import { gql, useQuery } from "@apollo/client"

const GET_CARE = gql`
query Care($careId: Int!) {
  care(careId: $careId) {
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
      lastName
      name
    }
    acts {
      careId
      description {
        fr
        en
      }
      id
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
      }
    }
    status {
      id
      description {
        fr
        en
      }
      type {
        description {
          fr
          en
        }
        id
      }
    }
  }
}
`

export const useCare = (careId: any) => {
  const { data, error, loading } = useQuery(GET_CARE, {
    variables: {
      careId
    }
  })
  return {
    data, error, loading
  }
}