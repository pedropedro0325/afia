import { gql } from "@apollo/client";

const CREATE_STATUS = gql`
   mutation CreateStatus($descriptionFr: String, $descriptionEn: String, $typeId: Int) {
  createStatus(descriptionFR: $descriptionFr, descriptionEN: $descriptionEn, typeId: $typeId) {
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
`

export { CREATE_STATUS }