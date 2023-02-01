import { gql } from "@apollo/client";

const CREATE_PERSONNEL = gql`
mutation CreatePartaker($name: String, $lastName: String, $birthDate: String, $birthCityId: String, $adressId: String, $phoneNumber: String, $email: String, $typeId: String, $specialityId: String, $description: String) {
  createPartaker(name: $name, lastName: $lastName, birthDate: $birthDate, birthCityId: $birthCityId, adressId: $adressId, phoneNumber: $phoneNumber, email: $email, typeId: $typeId, specialityId: $specialityId, description: $description) {
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
}
`

export { CREATE_PERSONNEL }