import { gql } from "@apollo/client";

const CREATE_PATIENT = gql`
    mutation CreatePatient($name: String, $lastName: String, $birthDate: String, $birthCityId: String, $adressId: String, $phoneNumber: String, $email: String, $description: String) {
  createPatient(name: $name, lastName: $lastName, birthDate: $birthDate, birthCityId: $birthCityId, adressId: $adressId, phoneNumber: $phoneNumber, email: $email, description: $description) {
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
}
`

export { CREATE_PATIENT }