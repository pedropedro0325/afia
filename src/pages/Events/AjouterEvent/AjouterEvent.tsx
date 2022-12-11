import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import './ajouterEvent.scss'
import { gql, useMutation } from '@apollo/client'
import { useStatus } from '../../../hooks/Status/useStatus'
import { useForm } from '../../../utils/hooks'

const CREATE_EVENT = gql`
    mutation CreateEvent($description: String!, $statusId: String, $startDate: dateScalar, $endDate: dateScalar, $patientId: Int, $partakerIds: [Int]) {
  createEvent(description: $description, statusId: $statusId, startDate: $startDate, endDate: $endDate, patientId: $patientId, partakerIds: $partakerIds) {
        id
        description
        statusId
        startDate
        endDate
        patientId
        partakerIds
    }
}
`

const AjouterEvent = () => {

    const [createEvent, { loading, error }] = useMutation(CREATE_EVENT)


    console.log("=========Mutation", error)

    const [initialState, setReportValues] = useState({
        description: "",
        startDate: "",
        endDate: "",
        statusId: "",
        patientId: "",
        partakerIds: "",
    });

    const { data: dataStatus } = useStatus()

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
                description: valuesCallBack.description, startDate: valuesCallBack.startDate, endDate: valuesCallBack.endDate, statusId: valuesCallBack.statusId,
                patientId: valuesCallBack.patientId, partakerIds: valuesCallBack.partakerIds,
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
                                    <select name="patientId" onChange={onChangeOption} id="" className='input'>
                                        <option value="">Salle</option>
                                    </select>
                                </div>
                                <div>
                                    <select name="partakerIds" onChange={onChangeOption} id="" className='input'>
                                        <option value="">Maladie</option>
                                    </select>
                                </div>
                            </div>
                            <div className='control'>
                                <div>
                                    <select name='statusId' onChange={onChangeOption} className='input' placeholder='Status*'>
                                        <option value="">Statut</option>
                                        {
                                            dataStatus?.status?.map((el: any) => (
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
