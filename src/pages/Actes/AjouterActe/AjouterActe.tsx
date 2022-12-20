import React, { useState, useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { gql, useMutation } from '@apollo/client'
import { useForm } from '../../../utils/hooks'
import { useSpecialities } from '../../../hooks/Specialities/useSpecialities'
import { useActes } from '../../../hooks/Actes/useActes'
import { useTranslation } from 'react-i18next'

const CREATE_ACTE = gql`
    mutation Mutation($description: String, $value: Float, $specialityIds: [Int], $partakerIds: [Int]) {
  createAct(description: $description, value: $value, specialityIds: $specialityIds, partakerIds: $partakerIds) {
    id
    description {
      fr
      en
    }
    price {
      partakerIds
      value
    }
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

    const navigate = useNavigate()

    const { t } = useTranslation()

    const { data: dataS, loading: loadingS, error: errorS } = useSpecialities()

    const [createAct, { data, loading, error }] = useMutation(CREATE_ACTE)

    console.log("=========Mutation", error)

    const [initialState, setReportValues] = useState({
        description: "",
        value: 0,
        specialityIds: [],
        partakerIds: 0
    });
    const [specialities, setSpecialities] = useState<[]>([])

    useEffect(() => {
        setSpecialities(dataS?.specialities)

    }, [dataS])

    const { onChange, onChangeOption, onSubmit, values } = useForm(
        formCallback,
        initialState
    );

    async function formCallback() {

        try {
            const valuesCallBack: any = values
            // send "values" to database
            console.log("=================", values)
            createAct({
                variables: {
                    value: Number(valuesCallBack.value), specialityIds: Number(valuesCallBack.specialityIds), partakerIds: Number(valuesCallBack.partakerIds), description: valuesCallBack.description,
                }
            })
            if (!error) {
                valuesCallBack.value = ''
                valuesCallBack.specialityIds = ''
                valuesCallBack.description = ''
                valuesCallBack.partakerIds = ''
            }
            navigate('/actes')
        }
        catch (error: any) {
            if (error) return `
            Erreur de soumission ! ${error.message}`
        }
    }

    return (
        <div>
            <div className='home-container'>
                <Outlet />
                <div className='ajouterType-container'>
                    <h2>{t('ajouterActe')}</h2>
                    <br />
                    <div className='form'>
                        <form onSubmit={onSubmit}>
                            <div className='controls'>
                                <div>
                                    <input id='description' name="description" onChange={onChange} type="text" className='input' placeholder='Description*' required />
                                </div><br />
                                <div>
                                    <select id='specialityIds' name="specialityIds" onChange={onChangeOption} className='input' placeholder='*' required>
                                        <option>{t('selectSpec')}</option>
                                        {
                                            specialities?.map((el: any) => (
                                                <option key={el.id} value={el.id}>{el.description?.fr}</option>
                                            ))
                                        }
                                    </select>
                                </div><br />
                                <div>
                                    <label htmlFor="">{t('prix1')}</label>
                                    <input id='value' name="value" onChange={onChange} type="text" className='input' placeholder='' />
                                </div>
                                <div>
                                    <label htmlFor="">{t('prix2')}</label>
                                    <input id='partakerIds' name="partakerIds" onChange={onChange} type="text" className='input' placeholder='' />
                                </div>
                            </div>
                            <div className='save'>
                                <div>
                                    <button type='submit' className='btn-save'>{t('save')}</button>
                                </div>
                                <div>
                                    <button className='btn-cancel'>{t('annuler')}</button>
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
