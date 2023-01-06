import { gql, useQuery } from "@apollo/client"

const GET_EVENT_BY_PARTAKER = gql`
query EventByPartaker($partakerId: Int!) {
    eventByPartaker(partakerId: $partakerId) {
    id
    description
    status {
      id
      description {
        en
        fr
      }
    }
    startDate
    endDate
    venue {
      id
      description
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
      }
      partakers {
        name
        lastName
        id
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