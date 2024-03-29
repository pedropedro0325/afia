import React, { useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { gql, useMutation } from '@apollo/client'
import { useForm } from '../../../utils/hooks'
import { useActes } from '../../../hooks/Actes/useActes'

const CREATE_ACTE = gql`
    mutation CreateAct($description: String, $price: Float, $specialityIds: [Int]) {
  createAct(description: $description, price: $price, specialityIds: $specialityIds) {
    id
    description {
      fr
      en
    }
    price
    specialities {
      id
      description {
        fr
        en
      }
    }
  }
}
`

const AjouterActe = () => {

    const [createAct, { data, loading, error }] = useMutation(CREATE_ACTE)

    console.log("=========Mutation", error)

    const [initialState, setReportValues] = useState({
        description: "",
        price: 0,
        specialityIds: []
    });

    const { data: dataS } = useActes()
    const [specialities, setSpecialities] = useState<[]>([])

    useEffect(() => {
        setSpecialities(dataS?.specialities)

    }, [dataS])

    const { onChange, onChangeOption, onSubmit, values } = useForm(
        formCallback,
        initialState
    );

    // if (loading) return <div>...loading</div>
    // if (error) return <div>something went wrong</div>

    async function formCallback() {
        const valuesCallBack: any = values
        // send "values" to database
        console.log("=================", values)
        createAct({
            variables: {
                price: Number(valuesCallBack.price), specialityIds: Number(valuesCallBack.specialityIds), description: valuesCallBack.description
            }
        })
        if (!error) {
            valuesCallBack.price = ''
            valuesCallBack.specialityIds = ''
            valuesCallBack.description = ''
        }
    }

    return (
        <div>
            <div className='home-container'>
                <Outlet />
                <div className='ajouterType-container'>
                    <h2>Ajouter une salle</h2>
                    <br />
                    <div className='form'>
                        <form onSubmit={onSubmit}>
                            <div className='controls'>
                                <div>
                                    <input id='description' name="description" onChange={onChange} type="text" className='input' placeholder='Description*' />
                                </div><br />
                                <div>
                                    <select id='specialityIds' name="specialityIds" onChange={onChangeOption} className='input' placeholder='*'>
                                        <option>Choisir une spécialité</option>
                                        {
                                            specialities?.map((el: any) => (
                                                <option key={el.id} value={el.id}>{el.description.fr}</option>
                                            ))
                                        }
                                    </select>
                                </div><br />
                                <div>
                                    <input id='price' name="price" onChange={onChange} type="text" className='input' placeholder='Prix*' />
                                </div>
                            </div>
                            <div className='save'>
                                <div>
                                    <button type='submit' className='btn-save'>Enrégistrer</button>
                                </div>
                                <div>
                                    <button className='btn-cancel'>Annuler</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AjouterActe
