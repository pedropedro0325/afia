import React, { useState, useEffect } from 'react'
import { Outlet, useParams, useNavigate } from 'react-router-dom'
import { useEvent } from '../../hooks/Events/useEvent'
import { useTranslation } from 'react-i18next'
import { useForm } from '../../utils/hooks'
import { gql, useMutation } from '@apollo/client'
import './paiement.scss'

const CREATE_INSTANCE = gql`
mutation CreateUpdateInstanceActPrice($careId: Int, $actId: Int, $amountPaid: Float, $amountDue: Float, $amountRejected: Float, $userId: Int, $dateAmount: dateScalar, $payWho: Int) {
  createUpdateInstanceActPrice(careId: $careId, actId: $actId, amountPaid: $amountPaid, amountDue: $amountDue, amountRejected: $amountRejected, userId: $userId, dateAmount: $dateAmount, payWho: $payWho) {
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
      birthDate
      birthCityId
      adressId
      phoneNumber
      email
      description
    }
    partakers {
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
      specialities {
        id
        description {
          fr
          en
        }
      }
      instanceActAllPrices {
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
      careId
    }
    status {
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
}
`

const Paiement = () => {

    const navigate = useNavigate()

    const { eventId } = useParams()

    const { t } = useTranslation()

    const { data: dataI, error: errorI, loading: loadingI } = useEvent(Number(eventId))

    const actId = dataI?.event?.care?.acts?.map((el: any) => (el?.price?.map((el: any) => el?.value)))

    const [createUpdateInstanceActPrice, { loading, error }] = useMutation(CREATE_INSTANCE)

    const [initialState] = useState({
        careId: "",
        actId: "",
        amountPaid: "",
        amountDue: "",
        amountRejected: "",
        userId: "",
        dateAmount: Date,
        payWho: ""
    });

    const { onChange, onChangeOption, onSubmit, values } = useForm(
        formCallback,
        initialState
    );

    async function formCallback() {

        try {
            const valuesCallBack: any = values
            // send "values" to database
            console.log("=================", values)
            createUpdateInstanceActPrice({
                variables: {
                    careId: Number(valuesCallBack.careId), actId: Number(valuesCallBack.actId), amountPaid: Number(valuesCallBack.amountPaid), amountDue: Number(valuesCallBack.amountDue),
                    amountRejected: Number(valuesCallBack.amountRejected), userId: Number(valuesCallBack.userId), dateAmount: valuesCallBack.dateAmount, payWho: Number(valuesCallBack.payWho)
                }
            })
            navigate('/evenements')
            window.location.reload()
        }
        catch (error: any) {
            if (error) return `
            Erreur de soumission ! ${error.message}`
        }

    }

    return (
        <div className='home-container'>
            <Outlet />
            <div className='paiement'>
                <h2>Paiement</h2>
                <div className='info'>
                    <div className='acte'>
                        <h3>Acte</h3>
                        <h4>{dataI?.event?.care?.acts?.map((el: any) => (<p key={el.id}>{el.description?.fr}</p>))}</h4>
                    </div>
                    <div className='prix'>
                        <h3>Prix</h3>
                        <h4>{actId}.00 $</h4>
                    </div>
                    <div className='acte'>
                        <h3>{t('motif')}</h3>
                        <h4>{dataI?.event?.care?.description}</h4>
                    </div>
                </div>
                <div className='regle'>
                    <div className='methode'>
                        <form onSubmit={onSubmit}>
                            <div className='partiel'>
                                <div className='partiel1'>
                                    <h4>Maladie</h4>
                                    <input type="text" name="careId" onChange={onChange} placeholder='' required />
                                    <h4>Acte</h4>
                                    <input type="text" name="actId" onChange={onChange} placeholder='' required />
                                    <h4>Montant à payer</h4>
                                    <input type="text" name="amountPaid" onChange={onChange} placeholder='' required />
                                    <h4>Montant dû</h4>
                                    <input type="text" name="amountDue" onChange={onChange} placeholder='' required />
                                </div>
                                <div className='partiel1'>
                                    <h4>Montant Rejeté</h4>
                                    <input type="text" name="amountRejected" onChange={onChange} placeholder='' required />
                                    <h4>Utilisateur</h4>
                                    <input type="text" name="userId" onChange={onChange} placeholder='' required />
                                    <h4>Date de paiement</h4>
                                    <input type="datetime-local" name="dateAmount" onChange={onChange} placeholder='' required />
                                    <h4>Payer par </h4>
                                    <input type="text" name="payWho" onChange={onChange} placeholder='' required />
                                </div>
                                {/* <div className='payeur'>
                                    <h4>Le payeur</h4>
                                    <select name="" id="" required>
                                        <option value="">Simon</option>
                                        <option value="">Jacques</option>
                                    </select>
                                </div> */}
                            </div>
                            <div className='submit'>
                                <button type='submit' className='btn-blue'>Valider</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Paiement
