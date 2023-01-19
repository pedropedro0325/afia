import React, { useState, useEffect } from 'react'
import { gql, useMutation } from '@apollo/client'
import { useNavigate } from 'react-router-dom';
import { useStatus } from '../../hooks/Status/useStatus';
import { usePatients } from '../../hooks/Patients/usePatients';
import { usePersonnels } from '../../hooks/Personnels/usePersonnels';
import { useVenues } from '../../hooks/Venues/useVenues';
import { useActes } from '../../hooks/Actes/useActes';
import { useForm } from '../../utils/hooks';
import './modalAddEvent.scss'
import { useTranslation } from 'react-i18next'

const CREATE_EVENT = gql`
 mutation CreateEvent($description: String!, $statusId: Int, $careDescription: String, $startDate: dateScalar, $endDate: dateScalar, $patientId: Int, $partakerIds: [Int], $venueId: Int, $actIds: [Int]) {
  createEvent(description: $description, statusId: $statusId, careDescription: $careDescription, startDate: $startDate, endDate: $endDate, patientId: $patientId, partakerIds: $partakerIds, venueId: $venueId, actIds: $actIds) {
    id
    description
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
    startDate
    endDate
    venue {
      id
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
}  
`

interface ModalProps {
    closeModalAdd: any;
}

const ModalAddEvent: React.FC<ModalProps> = ({ closeModalAdd }) => {

    const navigate = useNavigate()

    const { t } = useTranslation()

    const [createEvent, { loading, error }] = useMutation(CREATE_EVENT)


    console.log("=========Mutation", error)

    const [initialState, setReportValues] = useState({
        description: "",
        careDescription: "",
        startDate: Date,
        endDate: Date,
        statusId: "",
        patientId: "",
        partakerIds: [],
        venueId: "",
        actIds: []
    });

    const { data: dataStatus } = useStatus()
    const [statuts, setStatuts] = useState<[]>([])

    useEffect(() => {
        setStatuts(dataStatus?.manyStatus)

    }, [dataStatus])

    const { data: dataPat } = usePatients()
    const [patients, setPatients] = useState<[]>([])

    useEffect(() => {
        setPatients(dataPat?.patients)

    }, [dataPat])

    const { data: dataPer } = usePersonnels()
    const [personnels, setPersonnels] = useState<[]>([])

    useEffect(() => {
        setPersonnels(dataPer?.partakers)
    }, [dataPer])

    const { data: dataA } = useActes()
    const [actes, setActes] = useState<[]>([])

    useEffect(() => {
        setActes(dataA?.acts)
    }, [dataA])

    const { data: dataV } = useVenues()
    const [venues, setVenues] = useState<[]>([])

    useEffect(() => {
        setVenues(dataV?.venues)
    }, [dataV])

    const { onChange, onChangeOption, onSubmit, values } = useForm(
        formCallback,
        initialState
    );

    async function formCallback() {

        try {
            const valuesCallBack: any = values
            // send "values" to database
            console.log("=================", values)
            createEvent({
                variables: {
                    description: valuesCallBack.description, startDate: valuesCallBack.startDate, endDate: valuesCallBack.endDate, statusId: Number(valuesCallBack.statusId),
                    patientId: Number(valuesCallBack.patientId), partakerIds: Number(valuesCallBack.partakerIds), venueId: Number(valuesCallBack.venueId), actIds: Number(valuesCallBack.actIds),
                    careDescription: valuesCallBack.careDescription
                }
            })
            navigate('/calendrier')
            window.location.reload()
        }
        catch (error: any) {
            if (error) return `
            Erreur de soumission ! ${error.message}`
        }
    }

    return (
        <div>
            <div className='modalAdd'>
                <div className='modalContainer'>
                    <div className='titleCloseBtn'>
                        <button onClick={() => closeModalAdd(false)}>X</button>
                    </div>
                    <div className='title'>
                        <h2>{t('ajouterEv')}</h2>
                    </div><br />
                    <div className='body'>
                        <div className='form'>
                            <form onSubmit={onSubmit}>
                                <div className='controls'>
                                    <div>
                                        <input name='description' onChange={onChange} type="text" className='input' placeholder='Description*' required />
                                    </div>
                                </div>
                                <div className='controls'>
                                    <div>
                                        <input name='careDescription' onChange={onChange} type="text" className='input' placeholder='Description de la maladie' required />
                                    </div>
                                </div>
                                <div className='control'>
                                    <div>
                                        <label htmlFor="">{t('dateD')}*</label><br />
                                        <input name='startDate' onChange={onChange} type="datetime-local" className='input' placeholder='Date du début*' required />
                                    </div><br />
                                    <div>
                                        <label htmlFor="">{t('dateF')}*</label><br />
                                        <input name='endDate' onChange={onChange} type="datetime-local" className='input' placeholder='Date de fin*' required />
                                    </div>
                                </div>
                                <div className='control'>
                                    <div>
                                        <select name="patientId" onChange={onChangeOption} id="" className='input' required>
                                            <option value="">Patient</option>
                                            {
                                                patients?.map((el: any) => (
                                                    <option key={el.id} value={el.id}>{el.name}</option>
                                                ))
                                            }
                                        </select>
                                    </div><br />
                                    <div>
                                        <select name="partakerIds" onChange={onChangeOption} id="" className='input' required>
                                            <option value="">{t('personnel')}</option>
                                            {
                                                personnels?.map((el: any) => (
                                                    <option key={el.id} value={el.id}>{el.name}</option>
                                                ))
                                            }
                                        </select>
                                    </div>
                                </div>
                                <div className='control'>
                                    <div>
                                        <select name="venueId" onChange={onChangeOption} id="venueId" className='input' required>
                                            <option value="">{t('chambre')}</option>
                                            {
                                                venues?.map((el: any) => (
                                                    <option key={el.id} value={el.id}>{el.description}</option>
                                                ))
                                            }
                                        </select>
                                    </div><br />
                                    <div>
                                        <select name="actIds" onChange={onChangeOption} id="actIds" className='input' required>
                                            <option value="">{t('acte')}</option>
                                            {
                                                actes?.map((el: any) => (
                                                    <option key={el.id} value={el.id}>{el.description.fr}</option>
                                                ))
                                            }
                                        </select>
                                    </div>
                                </div>
                                <div className='control'>
                                    <div>
                                        <select name='statusId' onChange={onChangeOption} className='input' placeholder='' required>
                                            <option value="">{t('statut')}</option>
                                            {
                                                statuts?.map((el: any) => (
                                                    <option key={el.id} value={el.id}>{el.description.fr}</option>
                                                ))
                                            }
                                        </select>
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
        </div>
    )
}

export default ModalAddEvent
