import React, { useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import './ajouterEvent.scss'
import { gql, useMutation } from '@apollo/client'
import { useStatus } from '../../../hooks/Status/useStatus'
import { usePatients } from '../../../hooks/Patients/usePatients'
import { usePersonnels } from '../../../hooks/Personnels/usePersonnels'
import { useVenues } from '../../../hooks/Venues/useVenues'
import { useActes } from '../../../hooks/Actes/useActes'
import { useForm } from '../../../utils/hooks'

const CREATE_EVENT = gql`
    mutation CreateEvent($description: String!, $statusId: Int, $startDate: dateScalar, $endDate: dateScalar, $patientId: Int, $partakerIds: [Int], $venueId: Int, $actIds: [Int]) {
  createEvent(description: $description, statusId: $statusId, startDate: $startDate, endDate: $endDate, patientId: $patientId, partakerIds: $partakerIds, venueId: $venueId, actIds: $actIds) {
    id
    description
    status {
      id
      description {
        fr
        en
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
  }
}
`

const AjouterEvent = () => {

    const [createEvent, { loading, error }] = useMutation(CREATE_EVENT)


    console.log("=========Mutation", error)

    const [initialState, setReportValues] = useState({
        description: "",
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
        setStatuts(dataStatus?.status)
        console.log(dataStatus?.status);

    }, [dataStatus])

    const { data: dataPat } = usePatients()
    const [patients, setPatients] = useState<[]>([])

    useEffect(() => {
        setPatients(dataPat?.patients)
        console.log(dataPat?.patients);

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
        const valuesCallBack: any = values
        // send "values" to database
        console.log("=================", values)
        createEvent({
            variables: {
                description: valuesCallBack.description, startDate: valuesCallBack.startDate, endDate: valuesCallBack.endDate, statusId: Number(valuesCallBack.statusId),
                patientId: Number(valuesCallBack.patientId), partakerIds: Number(valuesCallBack.partakerIds), venueId: Number(valuesCallBack.venueId), actIds: Number(valuesCallBack.actIds)
            }
        })
    }


    return (
        <div>
            <div className='home-container'>
                <Outlet />
                <div className='ajouterEvent-container'>
                    <h2>Ajouter un évènement</h2>
                    <br />
                    <div className='form'>
                        <form onSubmit={onSubmit}>
                            <div className='controls'>
                                <div>
                                    <input name='description' onChange={onChange} type="text" className='input' placeholder='Description*' />
                                </div>
                            </div>
                            <div className='control'>
                                <div>
                                    <label htmlFor="">Date de début*</label><br />
                                    <input name='startDate' onChange={onChange} type="datetime-local" className='input' placeholder='Date du début*' />
                                </div>
                                <div>
                                    <label htmlFor="">Date de fin*</label><br />
                                    <input name='endDate' onChange={onChange} type="datetime-local" className='input' placeholder='Date de fin*' />
                                </div>
                            </div>
                            <div className='control'>
                                <div>
                                    <select name="patientId" onChange={onChangeOption} id="" className='input'>
                                        <option value="">Patient</option>
                                        {
                                            patients?.map((el: any) => (
                                                <option key={el.id} value={el.id}>{el.name}</option>
                                            ))
                                        }
                                    </select>
                                </div>
                                <div>
                                    <select name="partakerIds" onChange={onChangeOption} id="" className='input'>
                                        <option value="">Personnel</option>
                                    </select>
                                </div>
                            </div>
                            <div className='control'>
                                <div>
                                    <select name="venueId" onChange={onChangeOption} id="venueId" className='input'>
                                        <option value="">Salle</option>
                                    </select>
                                </div>
                                <div>
                                    <select name="actIds" onChange={onChangeOption} id="actIds" className='input'>
                                        <option value="">Maladie</option>
                                    </select>
                                </div>
                            </div>
                            <div className='control'>
                                <div>
                                    <select name='statusId' onChange={onChangeOption} className='input' placeholder='Status*'>
                                        <option value="">Statut</option>
                                        {
                                            statuts?.map((el: any) => (
                                                <option key={el.id} value={el.id}>{el.description}</option>
                                            ))
                                        }
                                    </select>
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

export default AjouterEvent
