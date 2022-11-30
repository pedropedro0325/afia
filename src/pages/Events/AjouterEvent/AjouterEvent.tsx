import React from 'react'
import { Outlet } from 'react-router-dom'
import './ajouterEvent.scss'
import { gql, useMutation } from '@apollo/client'

const CREATE_EVENT = gql`
    mutation Mutation($description: String!, $statusId: String, $startDate: String, $endDate: String) {
    createEvent(description: $description, statusId: $statusId, startDate: $startDate, endDate: $endDate) {
        description
        statusId
        startDate
        endDate
    }
}
`

const AjouterEvent = () => {

    let description: any, statusId: any, startDate: any, endDate: any
    const [createEvent, { data, loading, error }] = useMutation(CREATE_EVENT)

    if (loading) return 'Submitting...'
    if (error) return `Submission error! ${error.message}`

    return (
        <div>
            <div className='home-container'>
                <Outlet />
                <div className='ajouterEvent-container'>
                    <h2>Ajouter un évènement</h2>
                    <br />
                    <div className='form'>
                        <form onSubmit={e => {
                            e.preventDefault()
                            createEvent({ variables: { description: description.value, statusId: statusId.value, startDate: startDate.value, endDate: endDate.value } })
                        }}>
                            <div className='controls'>
                                <div>
                                    <input ref={node => { statusId = node }} type="text" className='input' placeholder='Status*' />
                                </div>
                            </div>
                            <div className='control'>
                                <div>
                                    <label htmlFor="">Date de début*</label><br />
                                    <input ref={node => { startDate = node }} type="date" className='input' placeholder='Date du début*' />
                                </div>
                                <div>
                                    <label htmlFor="">Date de fin*</label><br />
                                    <input ref={node => { endDate = node }} type="date" className='input' placeholder='Date de fin*' />
                                </div>
                            </div>
                            <div className='controls'>
                                <div>
                                    <input ref={node => { description = node }} type="text" className='input' placeholder='Description*' />
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
