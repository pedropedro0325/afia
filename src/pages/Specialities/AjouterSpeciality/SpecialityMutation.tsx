import { gql } from "@apollo/client";

const CREATE_SPECIALITY = gql`
    mutation Mutation($descriptionFr: String, $descriptionEn: String) {
  createSpeciality(descriptionFR: $descriptionFr, descriptionEN: $descriptionEn) {
    id
    description {
      fr
      en
    }
  }
}
`

export { CREATE_SPECIALITY }