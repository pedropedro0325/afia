import { gql, useMutation } from '@apollo/client'

const CREATE_PATIENT = gql`
    mutation CreatePatient($name: String, $lastName: String, $birthDate: String, $birthCityId: String, $adressId: String, $phoneNumber: String, $email: String, $description: String) {
    createPatient(name: $name, lastName: $lastName, birthDate: $birthDate, birthCityId: $birthCityId, adressId: $adressId, phoneNumber: $phoneNumber, email: $email, description: $description) {
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

export default function Mutation() {
    const [createPatient, { data, error, loading }] = useMutation(CREATE_PATIENT, {
        variables: {
            name: "Jacob",
            lastName: "Kash",
            birthDate: null,
            birthCityId: null,
            adressId: null,
            phoneNumber: null,
            email: null,
            description: null
        }
    })

    return <div><button onClick={() => createPatient()}>click</button></div>
}